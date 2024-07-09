
from flask import Flask, render_template, request, jsonify
import requests
import json
import sys
import pandas as pd
import pickle
from datetime import datetime
import netifaces as nif
import pytz
import os

app = Flask(__name__,
            static_url_path='', 
            static_folder='static')

def mac_for_ip(ip):
    'Returns a list of MACs for interfaces that have given IP, returns None if not found'
    for i in nif.interfaces():
        addrs = nif.ifaddresses(i)
        try:
            if_mac = addrs[nif.AF_LINK][0]['addr']
            if_ip = addrs[nif.AF_INET][0]['addr']
        except IndexError: #ignore ifaces that dont have MAC or IP
            if_mac = if_ip = None
        except KeyError: #ignore ifaces that dont have MAC or IP
            if_mac = if_ip = None
        if if_ip == ip:
            return if_mac
    return None


@app.route('/hello/<name>')
def hello_name(name):
   return 'Hello %s!' % name

@app.route('/skku', methods=('GET', 'POST'))
def index():
    
    if request.method == 'POST':
        
        # get params
        name = request.form['name']
        id = request.form['id']
        # seat = request.form['seat']
        # memo = request.form['memo']
        current_datetime = datetime.now(pytz.timezone('Asia/Seoul'))
        
        # get ip, mac address, proxy
        ip_addr = request.remote_addr
        ip_addr2 = mac_for_ip(ip_addr)
        ip_addr3 = request.headers.get('X-Forwarded-For')
        '''
        print('Hello world, ' + ip_addr, file=sys.stderr)
        if ip_addr3 is not None:
            print('Hello world, ' + ip_addr2, file=sys.stderr)
        if ip_addr3 is not None:
            print('Hello world, ' + ip_addr3, file=sys.stderr)
        '''  
        
        # load
        with open('static/attendance.pkl', 'rb') as f:
            attendance = pickle.load(f)
            
        dict_user = {
            'name' : name, # name,
            'id' : id,
            # 'seat' : '0', # seat,
            'ip' : ip_addr,
            'mac' : ip_addr2,
            'proxy' : ip_addr3,
            'date' : current_datetime,
            # 'memo' : '' # memo
        }
        current_attend = pd.DataFrame.from_dict([dict_user])
        # save to pickle
        attendance = pd.concat([attendance, current_attend])
        attendance.reset_index(inplace=True, drop=True)
        with open('static/attendance.pkl', 'wb') as f:
            pickle.dump(attendance, f, pickle.HIGHEST_PROTOCOL)

        # send user info        
        return render_template('index.html', result = dict_user)
    
    return render_template('index.html')



@app.route('/skku/search', methods=('GET', 'POST'))
def search():
    
    if request.method == 'POST':
        result = pd.DataFrame()
        
        column = request.form['selecttag']
        text = request.form['searchtext']
        
        # load
        with open('static/attendance.pkl', 'rb') as f:
            attendance = pickle.load(f)
          
        if column != "date":
            result = attendance[attendance[column] == text]
        else:
            date = text
            date2 = str(datetime.strptime(text, "%y-%m-%d").timedelta(days=1))
            result = attendance.loc[attendance["date"].between(date, date2)]
        
        # result = result.to_dict()
        
        return render_template('search.html', tables=[result.to_html()], titles=[''])
    
    return render_template('search.html')


@app.route('/skku/img', methods=('GET', 'POST'))
def img():
    
    
    return render_template('img.html')
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)