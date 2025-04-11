let boxes=document.querySelectorAll(".box");
let newBtn=document.querySelector("#new-btn");
let resetBtn=document.querySelector("#reset-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let winPat=[[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[2,5,8],[1,4,7],[2,4,6]];
let turnO=true;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="X";
            turnO=false;
        }
        else{
            box.innerText="O";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});
const reset=()=>{
    turnO=true;
    enableB();
    msgContainer.classList.add("hide");
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;;
    }
};
const enableB=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=(`Congratulations ${winner}`);
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of winPat){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos2==pos3){
                showWinner(pos1);
            }
        }
    }
};
newBtn.addEventListener("click",reset);
resetBtn.addEventListener("click",reset);