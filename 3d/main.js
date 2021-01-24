let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
canvas.style.backgroundColor = "#000";

let wall = [
  [100,20,500,20],
  [100,20,100,400],
  [100,20,500,400]
]

class Draw{
  static line(sx,sy,x,y,color){
    ctx.beginPath();
    ctx.lineTo(sx,sy);
    ctx.lineTo(x,y);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  static line2(y,c,color){
    let x = 700 -2 *c;
    Draw.line(x,200 +y /2,x,200,color);
    Draw.line(x,200,x,200 -y /2,color);
  }
  static circle(x,y,r,color){
    ctx.beginPath();
    ctx.arc(x,y,r,0, 2*Math.PI, false);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }
  static wall(sx,sy,x,y,c,n0,c0){
     let a = Math.floor(sy -y) /Math.floor(sx -x);
     let b = y -a *x;
     for(walls of wall){
       let inf = 0;
       let wa = Math.floor(walls[1] -walls[3]) /Math.floor(walls[0] -walls[2]);
       let wb = walls[1] -wa *walls[0];
       let xX = (wb -b) /(a -wa);
       let yX = (a *wb -b *wa) /(a -wa);
       if(a == "Infinity"||a == "-Infinity"){xX = x; yX = x *wa +wb;}
       else if(wa == 0){xX = (walls[1] -b) /a; yX = walls[1];}
       if(wa == "Infinity"||wa == "-Infinity"){xX = walls[0]; yX = walls[0] *a +b;}
       else if(a == 0){xX = (y -wb) /wa; yX = y;}
       if(xX >= Sab.min(sx,x) && xX <= Sab.max(sx,x)
       && yX >= Sab.min(sy,y) && yX <= Sab.max(sy,y)){
         if(xX >= Sab.min(walls[0],walls[2]) && xX <= Sab.max(walls[0],walls[2])
         && yX >= Sab.min(walls[1],walls[3]) && yX <= Sab.max(walls[1],walls[3])){
           Draw.circle(xX,yX,4,'red');
           Draw.line2(5000 /(Sab.magin(px,py,xX,yX) *Sab.cos(n0 -c0)),c,'white');
         }
       }
     }
  }
  static eye(x,y,s0,r,color){
    let n0 = s0;
    for(let i = 0;i < 99;i++){
      Draw.line(x,y,x +Sab.cos(n0) *r,y -Sab.sin(n0) *r,color);
      Draw.wall(x,y,x +Sab.cos(n0) *r,y -Sab.sin(n0) *r,i,n0,s0 +50);
      n0 = s0 +i;
    }
  }
}

class Sab{
  static min(x,y){
    if(x >= y) return y;
    else return x;
  }
  static max(x,y){
    if(x >= y) return x;
    else return y;
  }
  static magin(sx,sy,x,y){
  return Math.sqrt(Math.pow(Math.floor(sx -x),2) +Math.pow(Math.floor(sy -y),2));
  }
  static sin(x){
    return Math.sin(Math.PI /180 *x);
  }
  static cos(x){
    return Math.cos(Math.PI /180 *x);
  }
}

let px = 50;
let py = 50;
let p0 = 10;

function draw(){
  for(walls of wall){
    Draw.line(walls[0],walls[1],walls[2],walls[3],'white');
  }
  Draw.eye(px,py,p0,100,'blue');
  Draw.circle(px,py,10,'red');
}

document.body.addEventListener("mousemove",function(e){
  px = e.offsetX;
  py = e.offsetY;
});

let key_right;
let key_left;

document.addEventListener("keydown",function(e){
  if(e.key == "Right" || e.key == "ArrowRight"){
    key_right = true;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft"){
    key_left = true;
  }
});
document.addEventListener("keyup",function(e){
  if(e.key == "Right" || e.key == "ArrowRight"){
    key_right = false;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft"){
    key_left = false;
  }
});

function keymove(){
  if(key_right){
    p0 -= 2;
  }
  if(key_left){
    p0 += 2;
  }
}

function main(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  keymove();
  draw();
}

setInterval(main,30);
