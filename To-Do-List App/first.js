// const row=document.querySelector(`.row`);
// const todo=document.querySelector(`.todo-app`);


// const button=document.querySelector(`button`);

// button.addEventListener(`click`,(event)=>{
//     const input=document.getElementById(`input-box`);
//     const val=input.value;
//     input.value=``;

//     const ul=document.getElementById(`list-container`);

//     const element=document.createElement(`li`);

//     element.innerHTML=`${val}`;

//     ul.appendChild(element);

//     element.addEventListener(`click`,(event)=>{
//         if(element.className===``){
//             element.className=`checked`;
//             element.style.textDecoration=`line-through`;
//             element.style.color=`gray`;
//         }else{
//             element.className=``;
//             element.style.textDecoration=`none`;
//             element.style.color=`black`;
//         }
//     })
// })

const inputbox=document.getElementById(`input-box`);
const listcontainer=document.getElementById(`list-container`);

function addTask(){
    if(inputbox.value===``){
        alert(`You must write something!`);
    }else{
        let li=document.createElement(`li`);
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement(`span`);
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value=``;
    saveData()
}

const button=document.querySelector(`button`);

button.addEventListener(`click`,addTask);

listcontainer.addEventListener(`click`,(e)=>{
    console.log(e.target.tagName);
    if(e.target.tagName===`LI`){
        e.target.classList.toggle(`checked`);
        saveData()
    }else if(e.target.tagName===`SPAN`){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem(`data`,listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML=localStorage.getItem(`data`);
}

showTask();

