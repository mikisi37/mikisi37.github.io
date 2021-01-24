let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
canvas.style.backgroundColor = "#000";

let wall = [
  [100,20,500,20],
  [100,20,100,420],
  [100,420,500,420],
  [500,20,500,420]
]
let blok;

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
  static wall(color){
    for(let walls of wall){
      Draw.line(walls[0],walls[1],walls[2],walls[3],color);
    }
  }
  static blok(color){
    for(let bloks of blok){
      Draw.line(bloks[0],bloks[1],bloks[2],bloks[3],color)
    }
  }
  static vis(sx,sy,x,y,c,n0,c0,what){
    let a = Math.floor(sy -y) /Math.floor(sx -x);
    let b = y -a *x;
    for(let whats of what){
      let inf = 0;
      let wa = Math.floor(whats[1] -whats[3]) /Math.floor(whats[0] -whats[2]);
      let wb = whats[1] -wa *whats[0];
      let xX = (wb -b) /(a -wa);
      let yX = (a *wb -b *wa) /(a -wa);
      if(a == "Infinity"||a == "-Infinity"){xX = x; yX = x *wa +wb;}
      else if(wa == 0||wa == -0){xX = (whats[1] -b) /a; yX = whats[1];}
      if(wa == "Infinity"||wa == "-Infinity"){xX = whats[0]; yX = whats[0] *a +b;}
      else if(a == 0||a == -0){xX = (y -wb) /wa; yX = y;}
      if(xX >= Sab.min(sx,x) && xX <= Sab.max(sx,x)
      && yX >= Sab.min(sy,y) && yX <= Sab.max(sy,y)){
        if(xX >= Sab.min(whats[0],whats[2]) && xX <= Sab.max(whats[0],whats[2])
        && yX >= Sab.min(whats[1],whats[3]) && yX <= Sab.max(whats[1],whats[3])){
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
      Draw.vis(x,y,x +Sab.cos(n0) *r,y -Sab.sin(n0) *r,i,n0,s0 +50,wall);
      Draw.vis(x,y,x +Sab.cos(n0) *r,y -Sab.sin(n0) *r,i,n0,s0 +50,blok);
      n0 = s0 +i;
    }
  }
}

class Sab{
  static blok(){
    let c = Sab.random(10,20) *4;
    blok = [];
    for(let i = 0;i < c;i += 4){
      let x = Sab.random(100,460);
      let y = Sab.random(20,380);
      blok[i] = [x,y,x +40,y];
      blok[i+1] = [x,y,x,y +40];
      blok[i+2] = [x,y +40,x +40,y +40];
      blok[i+3] = [x +40,y,x +40,y +40];
    }
  }
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
  static random(min,max){
    return Math.random() *(max -min) +min;
  }
}

let px = 50;
let py = 50;
let p0 = 10;

function draw(){
  Draw.wall('white');
  Draw.blok('white')
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

Sab.blok();
setInterval(main,30);
