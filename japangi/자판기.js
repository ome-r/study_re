// 동적 움직임을 위해 js가 필요하다. button1안에는 동전이 들어가고, 
// 그 값을 log로(이때 무슨 값이든 받아온다) 받아와서 x라는 변수에 넣어준다.
// 이를 html에 id로 연결해서 작동시킨다.
// textcontent란 text값으로 받아온다는 것으로, str이다.
// replace는 대체해주는 것으로, html의 투입금액:0에서 투입금액: 부분을 빈칸''으로 대체한다.
// 잔고라는 뜻의 balance를 변수로 설정, 조건문 if else를 작성한다.
// if x값이 빈칸이라면 0을 보여준다. (그런데 그럴 일은 없기 때문에, 없애도 되는 코드이다.)
// else balance 즉 잔고를 text로 받아왔을텐데 이를 int로 변환한다.


function button1_click(s) {
    let x = document.getElementById('log');
    x.textContent=x.textContent.replace('투입금액:','');
    let balance;
    if(x.textContent=="")
        balance=0;
    else
        balance = parseInt(x.textContent);
    
    balance = balance + s;
    //이때 balance += s; 는 동일한 의미이다. 중복되는 값을 +로 묶어준 약속
    //x 값은 str이므로, 아까 받은 int를 다시 str으로 변환해서 넣어준다. 

    x.textContent = "투입금액:" + String(balance);
}
//이제 결과값을 출력하는 버튼을 만든다. button2에는 투입금액 부분이 들어가므로 공란

function button2_click() {

    let x = document.getElementById('log');
    if(x.textContent.length>15){
        x.textContent="투입금액:0";
    }
    else {
        x.textContent=x.textContent.replace('투입금액:','')
        let balance;
        if(x.textContent=="")
            balance=0;
        else 
            balance = parseInt(x.textContent);
        let coke = Math.floor(balance/1000);
        let sprite = Math.floor(balance/500); 
        let vita = Math.floor(balance/300);
        x.textContent = "사이다 :" + String(sprite) + "개 / 콜라 :" + String(coke) + "개 / 비타민음료 :" + String(vita) + "개" ;
    }
} 

