const form=document.getElementById(`tax-form`);

// form.addEventListener(`submit`,(event)=>{
//     event.preventDefault();
//     const data=new FormData(form);

//     for(let [key,value] of data.entries()){
//         console.log(key, value);
//     }
// });

// const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {

    event.preventDefault();
    // event.preventDefault();
    // const income = parseFloat(document.getElementById('income').value);
    // let tax = 0;

    // if (income <= 250000) {
    //     tax = 0;
    // } else if (income <= 500000) {
    //     tax = (income - 250000) * 0.05;
    // } else if (income <= 1000000) {
    //     tax = (income - 500000) * 0.2 + 12500;
    // } else {
    //     tax = (income - 1000000) * 0.3 + 112500;
    // }

    // resultDiv.textContent = `Your calculated tax is: INR ${tax.toFixed(2)}`;
    // // it rounds off the number to 2 decimal places

    const income=document.getElementById(`income`).value;

    let tax=0;

    if(income<=250000){
        tax=0;
    }else if(income<=500000){
        tax=(income-250000)*0.05;
    }else if(income<=1000000){
        tax=(income-500000)*0.2 + 12500;
    }else{
        tax=(income-1000000)*0.3 + 112500;
    }

    const result=document.getElementById(`result`);
    result.innerText=`Your Calculated Tax is : ${tax.toFixed(2)}`;

});

 
// function parseFloat(value) {
//     const result = Number.parseFloat(value);
//     return Number.isNaN(result) ? 0 : result;
// }

// console.log(parseFloat("123.45")); // 123.45
// console.log(parseFloat("abc"));    // 0
// console.log(parseFloat(""));       // 0
// console.log(parseFloat(null));     // 0