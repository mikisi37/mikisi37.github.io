let motion_existence;
let target_existence;
let arrow_existence;
let where_order;
let where_motion;
let where_arrow;

function program(){
  document.getElementById("error_message").innerText = "";
  document.getElementById("result_message").innerText = "";
  motion_existence = false;
  target_existence = false;
  arrow_existence = false;
  where_order = [];
  where_motion = [];
  where_arrow = [];
  for(let i = 0;i < 100;i++){
    if(savedate[i] != 'none'){
      where_order.push(i);
    }
  }
  for(let i = 0;i < where_order.length;i++){
    if(motion.includes(savedate[Number(where_order[i])])){
      motion_existence = true;
      where_motion.push(where_order[i]);
    }
    if(target.includes(savedate[Number(where_order[i])])){
      target_existence = true;
    }
    if(arrow.includes(savedate[Number(where_order[i])])){
      arrow_existence = true;
      where_arrow.push(where_order[i]);
    }
  }
  if(motion_existence && target_existence && arrow_existence){
    order_motion(where_motion[0]);
  }
  else if(motion_existence && target_existence && !arrow_existence){
    document.getElementById("error_message").innerText = "命令を矢印でつないで下さい。";
  }
  else if(motion_existence && !target_existence){
    document.getElementById("error_message").innerText = "命令を追加してください";
  }
  else if(!motion_existence){
    document.getElementById("error_message").innerText = "動作を追加してください。";
  }
}

function order_arrow(where){
  let xy = 0;
  let result;
  if(down_target.includes(savedate[where])){
    xy += 10;
  }
  else if(up_target.includes(savedate[where])){
    xy -= 10;
  }
  else if(left_target.includes(savedate[where])){
    xy -= 1;
  }
  else if(right_target.includes(savedate[where])){
    xy += 1;
  }
  if(motion.includes(savedate[where + xy])){
    document.getElementById("error_message").innerText = "矢印が無効なものをもとにしています。";
  }
  else if(target.includes(savedate[where + xy])){
    result = order_target(where + xy);
  }
  else if(arrow.includes(savedate[where + xy])){
    result = order_arrow(where + xy);
  }
  else{
    document.getElementById("error_message").innerText = "矢印が無効なものをもとにしています。";
  }
  return result;
}

function order_target(where){
  let result;
  if(savedate[where] == 'text'){
    result = 'a';
  }
  return result;
}

function order_motion(where){
  let motion_xy = 0;
  let xy = 0;
  if(up_order.includes(savedate[where + 10])){
    motion_xy++;
    xy = where + 10;
  }
  if(down_order.includes(savedate[where - 10])){
    motion_xy++;
    xy = where - 10;
  }
  if(right_order.includes(savedate[where - 1])){
    motion_xy++;
    xy = where - 1;
  }
  if(left_order.includes(savedate[where + 1])){
    motion_xy++;
    xy = where + 1;
  }
  if(motion_xy == 1){
    document.getElementById("result_message").innerText = order_arrow(xy);
  }
  else if(motion_xy == 0){
    document.getElementById("error_message").innerText = "命令を矢印でつないで下さい。";
  }
  else{
    document.getElementById("error_message").innerText = "１つの出力に対して１つしか出力できません。";
  }
}
