var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;
canvas.style.backgroundColor = "#000";

var start;

var paddle_width = 100;
var paddle_height = 10;
var paddle_x = (canvas.width - paddle_width)/2;
var paddle_y = canvas.height - paddle_height - 35;
function paddle(){
  ctx.beginPath();
  ctx.rect(paddle_x,paddle_y,paddle_width,paddle_height);
  ctx.fillStyle = "#00DDDD";
  ctx.fill();
  ctx.closePath();
}

var vx = 1;
var vy = -1;
var ball_size = 12;
var ball_x = canvas.width/2;
var ball_y = paddle_y - ball_size;
function ball(){
  ctx.beginPath();
  ctx.arc(ball_x,ball_y,ball_size,0,Math.PI*2);
  ctx.fillStyle = "#00DDDD";
  ctx.fill();
  ctx.closePath();
  ball_x += vx;
  ball_y += vy;
  if(ball_x > canvas.width - ball_size || ball_x < ball_size)vx=-vx;
  if(ball_y < ball_size)vy=-vy;
  else if(ball_y == paddle_y - 5 && ball_x < paddle_x + paddle_width && ball_x > paddle_x)vy=-vy;
  else if(ball_y > canvas.height - ball_size){
    alert("GAME OVER");
    document.location.reload();
    start = false;
    clearInterval(interval);
  }
}

document.addEventListener("keydown",keydown,false);
document.addEventListener("keyup",keyup,false);
var key_right;
var key_left;
function keydown(e){
  if(e.key == "Right" || e.key == "ArrowRight"){
    key_right = true;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft"){
    key_left = true;
  }
}
function keyup(e){
  if(e.key == "Right" || e.key == "ArrowRight"){
    key_right = false;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft"){
    key_left = false;
  }
  else if(e.key == "Enter" && !start){
    start = true;
  }
}
function keymove(){
  if(key_right && paddle_x < canvas.width-paddle_width){
    paddle_x += 3;
  }
  else if(key_left && paddle_x > 0){
    paddle_x -= 3;
  }
}

function main(){
  if(start){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball();
    keymove();
    paddle();
  }
}


ctx.font="40px' Impact'";
ctx.fillStyle = "#00DDDD";
ctx.fillText("Please puss Enter",canvas.width/3.5,canvas.height/2);

var interval = setInterval(main,5);
ball();
keymove();
paddle();
