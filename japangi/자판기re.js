
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

