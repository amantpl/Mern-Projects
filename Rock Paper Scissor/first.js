const container=document.querySelector(`.container`);
let player1=0;
let computer1=0;

// for win you need to score 5

const msg=document.getElementById(`msg`);
msg.innerHTML=``;

function checkwinner(number){
    if(number==5){
        return 1;
    }
}
const game=(event)=>{
    
    const computer=Math.floor(Math.random()*3);
    const player=event.target.id;
    const you=document.getElementById(`you`);
    const comp=document.getElementById(`comp`);

    console.log(computer);

    if(player==0 && computer==1){
        computer1++;
        comp.innerHTML=computer1;
        if(checkwinner(computer1)){
            winner.innerHTML=`Computer Won The Game`;
            container.removeEventListener(`click`,game);
            return ;
        }
        msg.innerHTML=`Oops! Paper beats Rock`;
        msg.style.backgroundColor=`red`;
    }else if(player==0 && computer==2){
        player1++;
        you.innerHTML=player1;
        if(checkwinner(player1)){
            winner.innerHTML=`Congrats! You Won the Game`;
            container.removeEventListener(`click`,game);
            return ;
        }
        msg.innerHTML=`Yayy! Rock beats Scissor`;
        msg.style.backgroundColor=`lightGreen`;
    }else if(player==1 && computer==0){
        player1++;
        you.innerHTML=player1;
        if(checkwinner(player1)){
            winner.innerHTML=`Congrats! You Won the Game`;
            container.removeEventListener(`click`,game);
            return ;
        }
        msg.innerHTML=`Yayy! Paper beats Rock`;
        msg.style.backgroundColor=`lightGreen`;
    }else if(player==1 && computer==2){
        computer1++;
        comp.innerHTML=computer1;
        if(checkwinner(computer1)){
            winner.innerHTML=`Computer Won The Game`;
            container.removeEventListener(`click`,game);
            return ;
        }
        msg.innerHTML=`Oops! Scissor beats Paper`
        msg.style.backgroundColor=`red`;
    }else if(player==2 && computer==0){
        computer1++;
        comp.innerHTML=computer1;
        if(checkwinner(computer1)){
            winner.innerHTML=`Computer Won The Game`;
            container.removeEventListener(`click`,game);
            return ;
        }
        msg.innerHTML=`Oops! Rock beats Scissor`;
        msg.style.backgroundColor=`red`;
    }else if(player==2 && computer==1){
        player1++;
        you.innerHTML=player1;
        if(checkwinner(player1)){
            winner.innerHTML=`Congrats! You Won the Game`;
            container.removeEventListener(`click`,game);
            return ;
        }
        msg.innerHTML=`Yayy! Scissor beats Paper`;
        msg.style.backgroundColor=`lightGreen`;
    }else{
        msg.innerHTML=`It was Draw`;
        msg.style.backgroundColor=`gray`;
    }

};

const winner=document.getElementById(`winner`);


container.addEventListener(`click`,game);

const button=document.getElementById(`restart`);

button.addEventListener(`click`,(event)=>{
    const you=document.getElementById(`you`);
    const comp=document.getElementById(`comp`);
    player1=0;
    computer1=0;
    comp.innerHTML=computer1;
    you.innerHTML=player1;
    winner.innerHTML=``;
    msg.innerHTML=``;

    
    // Restart the game 
    container.removeEventListener(`click`,game);
    container.addEventListener(`click`,game);

})