let interval;
let sizeX;
let sizeY;
let sizeZ;
let wsizeX = (window.parent.screen.width -100) /2;
let wsizeY = (window.parent.screen.height -200) /2;

let can = document.getElementById("can");
let ctx = can.getContext("2d");
can.width = wsizeX *2;
can.height = wsizeY *2;
can.style.backgroundColor = "#fff";

class Draw{
  static line(sx,sy,x,y,color){
    ctx.beginPath();
    ctx.lineTo(sx,sy);
    ctx.lineTo(x,y);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  static block(sx,sy,x,y,color){
    ctx.beginPath();
    ctx.rect(sx,sy,x,y);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.stroke();
  }
}

Draw.line( 0, wsizeY, wsizeX *2, wsizeY,"#000");
Draw.line( wsizeX, 0, wsizeX, wsizeY *2,"#000");

function make(){
  sizeX = Math.floor((wsizeY - spaceX *2) / pieceX);
  sizeY = Math.floor((wsizeY /2 - spaceY) / pieceY);
  sizeZ = Math.floor((wsizeY - spaceZ *2) / pieceZ);
}

function main(){

}

function start(){
  make();
  interval = setInterval(main,5);
}

function riset(){
  clearInterval(interval);
}
