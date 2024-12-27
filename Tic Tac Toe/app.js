const board=document.querySelector(`.board`);
let turn=`O`;
let totalturns=0;

const winner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];

const boardarr=[`E`,`E`,`E`,`E`,`E`,`E`,`E`,`E`,`E`];

function checkwinner(){
    for(let [index0,index1,index2] of winner){
        if(boardarr[index0]==boardarr[index1] && boardarr[index1]==boardarr[index2] && boardarr[index0]!=`E`){
            return 1;
        }
    }
}

const printer=(event)=>{
    const msg=document.getElementById(`winningMessage`);
    const cell=document.getElementById(event.target.id);
    if(turn==`O` && cell.innerHTML==``){
        turn=`X`;
        cell.innerHTML=turn;
        boardarr[event.target.id]=turn;
        totalturns++;
        if(checkwinner()){
            msg.innerHTML=`Match Winner is X`
            board.removeEventListener(`click`,printer);
            return ;
        }
    }else if(turn==`X` && cell.innerHTML==``){
        turn=`O`;
        boardarr[event.target.id]=turn;
        cell.innerHTML=turn;
        totalturns++;
        if(checkwinner()){
            msg.innerHTML=`Match Winner is O`;
            board.removeEventListener(`click`,printer);
            return ;
        }
    }

    if(totalturns==9){
        msg.innerHTML=`Match is Draw`;
        board.removeEventListener(`click`,printer);
    }
};

board.addEventListener(`click`,printer);


const button=document.getElementById(`restartButton`);
const cells=document.querySelectorAll(`.cell`);

button.addEventListener(`click`,()=>{
    cells.forEach((cell)=>{
        cell.innerHTML=``;
    })

    turn=`O`;
    totalturns=0;
    const msg=document.getElementById(`winningMessage`);
    msg.innerHTML=``;
    boardarr.fill(`E`);

    board.removeEventListener(`click`,printer);
    board.addEventListener(`click`,printer);
    
})
