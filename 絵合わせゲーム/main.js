function main(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  ctx.fillStyle="white";
  ctx.fillRect(0,0,600,600);
}
main();

window.addEventListener('load',Home())

//---パズルの設定---//
function mode1(){
  time += 1;
  ctx.beginPath();
  ctx.moveTo(300,300);
  ctx.lineTo(time,ud);
  ctx.stroke();
  if(time == 600){
    time = 0;
    if(ud == 100){
      ud = 500;
    }
    else{
      ctx.clearRect(0,0,canvas.width,canvas.height);
      main();
      ud = 100;
    }
  }
}
function mode2(){
  time += 1;
  ctx.beginPath();
  ctx.moveTo(300,ud);
  ctx.lineTo(time,300);
  ctx.stroke();
  if(time == 600){
    time = 0;
    if(ud == 0){
      ud = 600;
    }
    else{
      ctx.clearRect(0,0,canvas.width,canvas.height);
      main();
      ud = 0;
    }
  }
}
function mode3(){
  if(ud > 300){
    time -= 1;
    ud = Math.sqrt(90000 - Math.pow(300 - time,2)) + 300;
  }
  else if(ud < 300){
    time += 1;
    ud = -Math.sqrt(90000 - Math.pow(300 - time,2)) + 300;
  }
  else if(ud == 300 && time == 600){
    ud += 1;
  }
  else{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    main();
    ud -= 1;
  }
  ctx.beginPath();
  ctx.moveTo(300,300);
  ctx.lineTo(time,ud);
  ctx.stroke();
}

//---メイン処理---//
//初期化
function Lnitialize(){
  ctx.strokeStyle = "rgb(0,0,0)";
  ctx.clearRect(0,0,canvas.width,canvas.height);
  main();
}
//ループ
function Roop(){
  if(mode == 1){
    mode1();
  }
  else if(mode == 2){
    mode2();
  }
  else if(mode == 3){
    mode3();
  }
}
setInterval(Roop,5);

//---ボタンイベント---//
function Home(){
  Lnitialize();
  mode = 0;
}
function Mode1(){
  Lnitialize();
  mode = 1;
  time = 0;
  ud = 100;
}
function Mode2(){
  Lnitialize();
  mode = 2;
  time = 0;
  ud = 0;
}
function Mode3(){
  Lnitialize();
  mode = 3;
  time = 0;
  ud = 300;
}
