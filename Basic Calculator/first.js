const button=document.querySelector(`button`);

button.addEventListener(`click`,()=>{
    const num1=document.getElementById(`num1`);
    const num2=document.getElementById(`num2`);

    const nume1=Number(num1.value);
    const nume2=Number(num2.value);

    if(isNaN(nume1) || isNaN(nume2)){
        return ;
    }
    const result=nume1+nume2;
    const res=document.getElementById(`res`);
    res.innerHTML=`Result: `+result;
});