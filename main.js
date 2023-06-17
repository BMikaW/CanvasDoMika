canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "white";

ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 2;
ctx.arc(200, 200, 50, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", myMousedown)

function myMousedown(e)
{
    mouseX =e.clientX - canvas.offsetLeft;
    mouseY =e.clientY - canvas.offsetTop;
    console.log("X="+mouseX+"Y ="+mouseY);

   circle(mouseX, mouseY);

}
function circle(mouseX, mouseY)
{
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= 5;
    ctx.arc(mouseX, mouseY, 50, 0, 2*Math.PI);
    ctx.stroke();    
}