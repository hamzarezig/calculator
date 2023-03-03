{
    let input = document.getElementById("input");

    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let num3 = document.getElementById("num3");
    let num4 = document.getElementById("num4");
    let num5 = document.getElementById("num5");
    let num6 = document.getElementById("num6");
    let num7 = document.getElementById("num7");
    let num8 = document.getElementById("num8");
    let num9 = document.getElementById("num9");
    let num0 = document.getElementById("num0");
    let dot = document.getElementById("dot");

    let div = document.getElementById("div");
    let mul = document.getElementById("mul");
    let mis = document.getElementById("mis");
    let plus = document.getElementById("plus");

    let del = document.getElementById("del");
    let ac = document.getElementById("ac");

    let res = document.getElementById("res");




    num1.addEventListener("click",()=>input.value+='1');
    num2.addEventListener("click",()=>input.value+='2');
    num3.addEventListener("click",()=>input.value+='3');
    num4.addEventListener("click",()=>input.value+='4');
    num5.addEventListener("click",()=>input.value+='5');
    num6.addEventListener("click",()=>input.value+='6');
    num7.addEventListener("click",()=>input.value+='7');
    num8.addEventListener("click",()=>input.value+='8');
    num9.addEventListener("click",()=>input.value+='9');
    num0.addEventListener("click",()=>input.value+='0');

    dot.addEventListener("click",()=>input.value+='.');
    div.addEventListener("click",()=>input.value+='/');
    mul.addEventListener("click",()=>input.value+='*');
    mis.addEventListener("click",()=>input.value+='-');
    plus.addEventListener("click",()=>input.value+='+');

    ac.addEventListener("click",()=>input.value='');
    del.addEventListener("click",()=>input.value=input.value.substring(0,input.value.length-1));

    res.addEventListener("click",()=>input.value=eval(input.value));



}