canvas= document.getElementById("myCanvas");
var ctx=canvas.getContext("2d")
color="red" 
widthline=2

mouseEvent="empty"

canvas.addEventListener("mousedown",mymousedown)

function mymousedown(e){
    mouseEvent="mouseDown"
}

canvas.addEventListener("mousemove",mymousemove)

function mymousemove(e){    
    var mousepositionX=e.clientX-canvas.offsetLeft; 

    var mousepositionY=e.clientY-canvas.offsetTop;
    
    if (mouseEvent=="mouseDown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=widthline
        ctx.moveTo(posfinalx,posfinaly)
        ctx.lineTo(mousepositionX,mousepositionY)
        ctx.stroke()
    }
    posfinalx=mousepositionX
    posfinaly=mousepositionY

}

canvas.addEventListener("mouseup",mymouseup)

function mymouseup(e){
    mouseEvent="mouseUP"
}

canvas.addEventListener("mouseleave",mymouseleave)

function mymouseleave(e){
    mouseEvent="mouseleave"
}