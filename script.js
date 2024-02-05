let boxes = document.querySelectorAll(".box");
const msgcontainer = document.querySelector(".winner");
const winPatterens = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let count = 0;

let playerO = true;

const DisplayWinner = (winner) =>{
    count=0;
    playerO = true;
    msgcontainer.classList.remove("hide");
    const msgbox = document.querySelector("#msgbox");
    console.log(typeof(winner));
    if (winner==="Draw") {
        msgbox.innerHTML="";
        msgbox.append(`Game is Drawn`);
    
    }else{
        msgbox.innerHTML="";
        msgbox.append(`Winner is ${winner}`);
    
        
    }
}

const checkWinner = () =>{
    winPatterens.forEach((pat)=>{
        let elem1 = boxes[pat[0]].textContent;
        let elem2 = boxes[pat[1]].textContent;
        let elem3 = boxes[pat[2]].textContent;
        if(elem1!=""&&elem2!=""&&elem3!="" ){
            if(elem1===elem2 && elem2===elem3){
                DisplayWinner(elem1);
            }
        }
    })

} 

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playerO){
            box.innerText="O";
            box.classList.add("O");
            playerO = false;
        }else{
            box.innerText="X";
            box.classList.add("X");
            playerO = true;
        }
        box.disabled = true;
        checkWinner();
        count++;
        if(count==9){
            DisplayWinner("Draw");
        }
    })
})

const newGame = () => {
    if(!msgcontainer.classList.contains("hide")){
        msgcontainer.classList.add("hide");
    }
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        box.classList.remove("O");
        box.classList.remove("X");
    })
}

