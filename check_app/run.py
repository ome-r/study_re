from waitress import serve
import app  # app.py 파일에서 Flask 애플리케이션 가져오기

if __name__ == '__main__':
    serve(app.app, host='0.0.0.0', port=8000)
