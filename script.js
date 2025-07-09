let user=0;
let comp=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const u=document.querySelector("#user");
const c=document.querySelector("#comp");

const c_id= () =>{
    const opt=["rock","paper","scissors"];
    const rndm= Math.floor(Math.random()*3);
    return opt[rndm];
}
const draw=()=>{
    msg.innerText="Game Drawn Play Again";
    msg.style.backgroundColor = "black";
}
const showWinner= (uwin)=>{
    if(uwin===true){
        user++;
        u.innerText=user;
        msg.innerText="You Win!";
        msg.style.backgroundColor = "green";
        
    } else{
        comp++;
        c.innerText=comp;
        msg.innerText="You Lose";
        msg.style.backgroundColor = "red";
    }
}

const playGame= (uid)=>{
    console.log("User Choice: ",uid);
    const cid= c_id();
    console.log("Computer Choice: ",cid);

    if(uid === cid){
        draw()
    }else{
        let uwin=true;
        if(uid==="rock"){
            uwin= cid ==="paper" ?false : true;
        } else if(uid==="paper"){
            uwin= cid ==="scissors"?false:true;
        } else{
            uwin= cid ==="rock"?false:true;
    } showWinner(uwin);
}
}

choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const uid=choice.getAttribute("id");
        playGame(uid);
    })
})