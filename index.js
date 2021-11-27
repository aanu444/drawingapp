//The code below initializes the entire web app to begin drawing
const canvas = document.querySelector("#canvas");
const drawingBoard = document.querySelector("#drawing-board");
const draw = document.querySelector("#draw");
const change = document.querySelector("#change");
const increase = document.querySelector("#increase");
const clear = document.querySelector("#clear");
const increaseSize=document.querySelector("#size");
const colourMe= document.querySelector("#colour");
const ctx = canvas.getContext("2d");



//Variables
let painting=false;
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;


//Making Canvas Responsive
window.addEventListener("load", (x)=>{
    if (x.matches){
       canvas.height=window.innerHeight;
       canvas.width=window.innerWidth; 
    }else{
        return;
    }

})

let x= window.matchMedia("(max-width: 769px)");




//At first glance and as long as Start drawing is not clicked, template wont change and cursors would be read-only;
const notAllowed = () => {
    draw.style.cursor = "not-allowed";
    change.style.cursor = "not-allowed";
    increase.style.cursor = "not-allowed";
    clear.style.cursor = "not-allowed";
    painting=false;

}
notAllowed();

//Once "start drawing" is clicked, change cursors to "pointer";
const beginDrawing = () => {
    let start = document.querySelector("#start");
    start.addEventListener("click", () => {
        alert("Get The Best Experience Using Web");
        drawingBoard.style.cursor = "pointer";
        drawingBoard.style.backgroundColor = "#fff";
        draw.style.cursor = "pointer";
        change.style.cursor = "pointer";
        increase.style.cursor = "pointer";
        clear.style.cursor = "pointer";

    }, false);

}
beginDrawing();

//Begin Draw Action
draw.addEventListener("click", () => {
    function startPosition(e) {
        painting = true;
        drawing(e);
    }

    function endPosition() {
        painting = false;
        ctx.beginPath();
    }

    function drawing(e) {
        if (!painting) {
            return;}

        ctx.lineWidth = increaseSize.value;
        ctx.lineCap = "round";
        ctx.strokeStyle= colourMe.value;

        ctx.lineTo(e.offsetX, e.offsetY);
        console.log(e.offsetX);
        console.log(e.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    }


    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", drawing);
});

//Clear Drawing
clear.addEventListener("click", (e) =>{
    if (e.target.id === "clear"){
        ctx.clearRect(0,0, canvas.width, canvas.height);
    }
});

















