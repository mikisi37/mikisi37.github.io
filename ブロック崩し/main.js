var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;
canvas.style.backgroundColor = "#000";

var start;

var paddle_width = canvas.width /8;
var paddle_height = 10;
var paddle_x = (canvas.width -paddle_width -10) /2;
var paddle_y = canvas.height -paddle_height -35;
var paddle_wid;
function paddle(){
  var count = 0;
  for(var i = 0;i < block_column *block_line;i++){
    if(block_exist[i])count++;
  }
  paddle_wid = paddle_width /(block_column *block_line) *count +10;
  ctx.beginPath();
  ctx.rect(paddle_x,paddle_y,paddle_wid,paddle_height);
  ctx.fillStyle = "#00DDDD";
  ctx.fill();
  ctx.closePath();
}

var ball_size = 12;
var ball_x = canvas.width /2;
var ball_y = paddle_y - ball_size;
var v = 1 / Math.cos(45);
var random = Math.floor(Math.random() *(151 -30) +30);
var vx = Math.cos(random) *v;
var vy = Math.sin(random) *v;
function ball(){
  ctx.beginPath();
  ctx.arc(ball_x,ball_y,ball_size,0,Math.PI *2);
  ctx.fillStyle = "#00DDDD";
  ctx.fill();
  ctx.closePath();
  ball_x += vx;
  ball_y += vy;
  for(var i = 0;i < block_column *block_line;i++){
    if(block_exist[i]){
      if(ball_x >= (i %block_column +1) *(block_width +block_padin) -block_width && ball_x <= (i %block_column +1) *(block_width +block_padin) -block_width +6 && ball_y <= (Math.floor(i  /block_column) +1) *(block_height +10) && ball_y >= (Math.floor(i  /block_column) +1) *(block_height +10)){
        vx = -vx;
        block_exist[i] = false;
      }
      else if(ball_x <= (i %block_column +1) *(block_width +block_padin) && ball_x >= (i %block_column +1) *(block_width +block_padin) -block_width -6 && ball_y <= (Math.floor(i  /block_column) +1) *(block_height +10) && ball_y >= (Math.floor(i  /block_column) +1) *(block_height +10)){
        vx = -vx;
        block_exist[i] = false;
      }
      else if(ball_y <= (Math.floor(i  /block_column) +1) *(block_height +10) && ball_y >= (Math.floor(i  /block_column) +1) *(block_height +10) -6 && ball_x >= (i %block_column +1) *(block_width +block_padin) -block_width && ball_x <= (i %block_column +1) *(block_width +block_padin)){
        vy = -vy;
        block_exist[i] = false;
      }
      else if(ball_y >= (Math.floor(i  /block_column) +1) *(block_height +10) -block_height && ball_y <= (Math.floor(i  /block_column) +1) *(block_height +10) +6 && ball_x >= (i %block_column +1) *(block_width +block_padin) -block_width && ball_x <= (i %block_column +1) *(block_width +block_padin)){
        vy = -vy;
        block_exist[i] = false;
      }
    }
  }
  if(ball_x > canvas.width - ball_size || ball_x < ball_size)vx=-vx;
  if(ball_y < ball_size)vy=-vy;
  else if(ball_y >= paddle_y -5 && ball_y <= paddle_y && ball_x <= paddle_x + paddle_width && ball_x >= paddle_x){
    if(ball_x <= paddle_x + paddle_width /5){
      vx = Math.cos(60)*v;
      vy = Math.sin(60)*v;
    }
    else if(ball_x <= paddle_x + paddle_width /15 *7 && ball_x > paddle_x + paddle_width /5){
      vx = -Math.cos(30)*v;
      vy = Math.sin(30)*v;
    }
    else if(ball_x < paddle_x + paddle_width /15 *8 && ball_x > paddle_x + paddle_width /15 *7){
      vx = 0;
      vy = -v;
    }
    else if(ball_x < paddle_x + paddle_width /15 *12 && ball_x >= paddle_x + paddle_width /15 *8){
      vx = Math.cos(30)*v;
      vy = Math.sin(30)*v;
    }
    else{
      vx = -Math.cos(60)*v;
      vy = Math.sin(60)*v;
    }
  }
  else if(ball_y > canvas.height - ball_size){
    alert("GAME OVER");
    document.location.reload();
    start = false;
    clearInterval(interval);
  }
}

var block_width = paddle_width;
var block_height = paddle_width /2;
var block_column = Math.floor((canvas.width -10) /(block_width +10));
var block_line = Math.floor((canvas.height /2) /(block_height +10));
var block_padin = (canvas.width -(block_width *block_column)) /(block_column +1);
var block_exist = [];
for(var i = 0;i < block_column *block_line;i++){
  block_exist[i] = true;
}
function block(){
  var block_count = 0;
  for(var i =0;i < block_column *block_line;i++){
    if(block_exist[i]){
      ctx.beginPath();
      ctx.rect((i %block_column +1) *(block_width +block_padin),(Math.floor(i  /block_column) +1) *(block_height +10),-block_width,-block_height);
      ctx.fillStyle = "#00DDDD";
      ctx.fill();
      ctx.closePath();
    }
    else block_count++;
  }
  if(block_count == block_column *block_line){
    alert("CLEAR THE GAME");
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
  if(key_right && paddle_x < canvas.width -paddle_wid){
    paddle_x += 2;
  }
  else if(key_left && paddle_x > 0){
    paddle_x -= 2;
  }
}

function main(){
  if(start){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball();
    block();
    keymove();
    paddle();
  }
}


ctx.font="40px' Impact'";
ctx.fillStyle = "#00DDDD";
ctx.fillText("Please push Enter",canvas.width /3.5,canvas.height /2);

var interval = setInterval(main,5);
ball();
keymove();
paddle();
