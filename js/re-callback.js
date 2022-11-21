// 이슈 발생 : setTimeout이 있어서 return을 바로 받아오지 못하는!

function back() {
    setTimeout(function() {
         return "back";
    }, 1000); // 이렇게 하면 b에서는 undefined가 나온다. 
}
function hell() {
    setTimeout(function() {
    }, 1000);
    return "hell"; //이렇게 해야만 값이 나온다. 
}

let a = call('kim');
let b = back();
let c = hell();
console.log(b);
console.log(c); 
