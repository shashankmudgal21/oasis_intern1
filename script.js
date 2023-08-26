// console.log('Hello world')
s = "";
let button = document.getElementsByClassName('btn');
let input = document.querySelector('input');
Array.from(button).forEach((b)=>{
b.addEventListener('click',(e)=>{
console.log(e.target.innerText)
if(e.target.innerText == "="){
    let ans = eval(s);
    input.value = ans;
}
else if(e.target.innertText == "X"){
    s+="*";
    input.value = s;
}
else if(e.target.innerText == "C"){
    s = "";
    input.value = s;
}

else{
    s+=e.target.innerText;
    input.value = s;
}
})
});