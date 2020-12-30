let motion_existence;
let target_existence;
let arrow_existence;
let where_arrow = [];

function program(){
  document.getElementById("error_message").innerText = "";
  where_arrow = [];
  motion_existence = false;
  target_existence = false;
  arrow_existence = false;
  let where_order = [];
  for(let i = 0;i < 100;i++){
    if(savedate[i] != 'none'){
      where_order.push(i);
    }
  }
  for(let i = 0;i < where_order.length;i++){
    if(motion.includes(savedate[Number(where_order[i])])){
      motion_existence = true;
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
    order_arrow(where_arrow[0]);
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
  let error_flag = '';
  if(savedate[Number(where)] == 'up'){
    if(Math.floor(Number(where) / 10) != 0&&Math.floor(Number(where) / 10) != 9){
      
    }
    else{
      error_flag = 'arrow';
    }
  }
  else if(savedate[Number(where)] == 'up_right'){
    if(Number(where) % 10 != 9&&Math.floor(Number(where) / 10) != 9) {

    }
    else{
      error_flag = 'arrow';
    }
  }
  else if(savedate[Number(where)] == 'up_left'){
    if(Number(where) % 10 != 0&&Math.floor(Number(where) / 10) != 9) {

    }
    else{
      error_flag = 'arrow';
    }
  }
  else if(savedate[Number(where)] == 'down'){
    if(Math.floor(Number(where) / 10) != 0&&Math.floor(Number(where) / 10) != 9) {

    }
    else{
      error_flag = 'arrow';
    }
  }
  else if(savedate[Number(where)] == 'down_right'){
    if(Math.floor(Number(where) / 10) != 0&&Number(where) % 10 != 9) {

    }
    else{
      error_flag = 'arrow';
    }
  }
  else if(savedate[Number(where)] == 'down_left'){
    if(Math.floor(Number(where) / 10) != 0&&Number(where) % 10 != 0) {

    }
    else{
      error_flag = 'arrow';
    }
  }
  else if(savedate[Number(where)] == 'right'){
    if(Number(where) % 10 != 0&&Number(where) % 10 != 9) {

    }
    else{
      error_flag = 'arrow';
    }
  }
  else if(savedate[Number(where)] == 'right_up'){
    if(Number(where) % 10 != 0&&Math.floor(Number(where) / 10) != 0) {

    }
    else{
      error_flag = 'arrow';
    }
  }
  else if(savedate[Number(where)] == 'right_down'){
    if(Number(where) % 10 != 0&&Math.floor(Number(where) / 10) != 9) {

    }
    else{
      error_flag = 'arrow';
    }
  }
  else if(savedate[Number(where)] == 'left'){
    if(Number(where) % 10 != 0&&Number(where) % 10 != 9) {

    }
    else{
      error_flag = 'arrow';
    }
  }
  else if(savedate[Number(where)] == 'left_up'){
    if(Math.floor(Number(where) / 10) != 0&&Number(where) % 10 != 9) {

    }
    else{
      error_flag = 'arrow';
    }
  }
  else if(savedate[Number(where)] == 'left_down'){
    if(Math.floor(Number(where) / 10) != 9&&Number(where) % 10 != 9) {

    }
    else{
      error_flag = 'arrow';
    }
  }
  if(error_flag == 'arrow'){
    document.getElementById("error_message").innerText = "矢印が無効な方向を向いています。";
  }
  console.log(where);
}
