let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
canvas.style.backgroundColor = "#000";

class Draw{
  static line(sx,sy,x,y,color){
    ctx.beginPath();
    ctx.lineTo(sx,sy);
    ctx.lineTo(x,y);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  static circle(x,y,r,color){
    ctx.beginPath();
    ctx.arc(x,y,r,0, 2*Math.PI, false);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }
  static wall(what,v,color){
    for(let i = 0;i < what.length;i++){
      for(let ii = 0;ii < what[i].length;ii++){
        let x = (ii +1) *v -v;
        let y = (i +1) *v -v;
        if(what[i][ii] == 1){
          Draw.line(x,y,x,y +v,color);
        }
        else if(what[i][ii] == 2){
          Draw.line(x +v,y,x +v,y +v,color);
        }
        else if(what[i][ii] == 3){
          Draw.line(x,y,x +v,y,color);
        }
        else if(what[i][ii] == 4){
          Draw.line(x,y +v,x +v,y +v,color);
        }
        else if(what[i][ii] == 5){
          Draw.line(x,y,x,y +v,color);
          Draw.line(x,y,x +v,y,color);
        }
        else if(what[i][ii] == 6){
          Draw.line(x +v,y,x +v,y +v,color);
          Draw.line(x,y,x +v,y,color);
        }
        else if(what[i][ii] == 7){
          Draw.line(x,y,x,y +v,color);
          Draw.line(x,y +v,x +v,y +v,color);
        }
        else if(what[i][ii] == 8){
          Draw.line(x +v,y,x +v,y +v,color);
          Draw.line(x,y +v,x +v,y +v,color);
        }
      }
    }
  }
  static eye(x,y,s0,r,color){
    Draw.line(x,y,x +Math.cos(s0 *(Math.PI /180)) *r,y -Math.sin(s0 *(Math.PI /180)) *r,color);
    s0 += 50;
    Draw.line(x,y,x +Math.cos(s0 *(Math.PI /180)) *r,y -Math.sin(s0 *(Math.PI /180)) *r,color);
    s0 -= 100;
    Draw.line(x,y,x +Math.cos(s0 *(Math.PI /180)) *r,y -Math.sin(s0 *(Math.PI /180)) *r,color);
  }
}

let px = 50;
let py = 50;
let p0 = 0;

let stage = [//0は空白 1は左縦 2は右縦　3は上横 4は下横 5は左上角 6は右上角 7は左下角 8は右下角
  [0,0,0,0,0,0,0],
  [0,5,3,3,3,3,6],
  [0,1,0,0,0,0,2],
  [0,1,0,0,0,0,2],
  [0,1,0,0,0,0,2],
  [0,1,0,0,0,0,2],
  [0,7,4,4,4,4,8],
];

function draw(){
  Draw.wall(stage,50,'white');
  Draw.eye(px,py,p0,100,'red');
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
    p0 -= 3;
  }
  if(key_left){
    p0 += 3;
  }
}

function main(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  keymove();
  draw();
}

setInterval(main,30);
