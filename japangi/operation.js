const pricelist = {
    cider: 500,
    cola: 1000,
    vita: 300
}

const backEl    = document.getElementById('il_back');
const ohBackEl  = document.getElementById('oh_back');
const tenBackEl = document.getElementById('ten_back');
const buttonEl  = document.getElementById('result');
const muchEl    = document.getElementById('howMuch');

let currentMoney = 0;
let beverage=[0,0,0];

backEl.addEventListener('click', () => {
    if(((currentMoney + pricelist.cider)) <= 10000){
        currentMoney = currentMoney + pricelist.cider;
    }
    muchEl.innerHTML = currentMoney.toString();
})

ohBackEl.addEventListener('click', () => {
    if((currentMoney + pricelist.cola) <= 10000){
        currentMoney = currentMoney + pricelist.cola;
    }
    muchEl.innerHTML = currentMoney.toString();
})

tenBackEl.addEventListener('click', () => {
    if((currentMoney + pricelist.vita) <= 10000){
        currentMoney = currentMoney + pricelist.vita;
    }
    muchEl.innerHTML = currentMoney.toString();
})
let isEmpty=1;
buttonEl.addEventListener('click', () => {
if(isEmpty===1)
{
    muchEl.innerHTML = "사이다는 " + parseInt(currentMoney/pricelist.cider).toString() + "개 살 수 있어요.<br>";
    muchEl.innerHTML = muchEl.innerHTML + "콜라는 " + parseInt(currentMoney/pricelist.cola).toString()+ "개 살 수 있어요.<br>";
    muchEl.innerHTML = muchEl.innerHTML + "비타민음료는 " +parseInt(currentMoney/pricelist.vita).toString() +"개 살 수 있어요.<br>";
    isEmpty = 0;
    currentMoney=0;

}
else
{
    muchEl.innerHTML = "";
    isEmpty =1;
}
})