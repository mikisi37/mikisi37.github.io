let xy;
//let order_typ =['none','up','down','right','left','up_right','up_left','down_right','down_left','right_up','right_down','left_up','left_down','output','text'];

function order(what){
  savedate.splice(xy,1,what);
  program();
  if(what == 'up'||what == 'left_up'||what == 'left_down'){
    document.getElementById(xy).style.transform ="rotate("+270+"deg)";
    document.getElementById(xy).style.fontSize ="20px";
  }
  else if(what == 'down'||what == 'right_up'||what == 'right_down'){
    document.getElementById(xy).style.transform ="rotate("+90+"deg)";
    document.getElementById(xy).style.fontSize ="20px";
  }
  else if(what == 'right'||what == 'up_right'||what == 'up_left'){
    document.getElementById(xy).style.transform ="rotate("+0+"deg)";
    document.getElementById(xy).style.fontSize ="20px";
  }
  else if(what == 'left'||what == 'down_right'||what == 'down_left'){
    document.getElementById(xy).style.transform ="rotate("+180+"deg)";
    document.getElementById(xy).style.fontSize ="20px";
  }
  else if(what == 'none'){
    what = ' ';
  }
  else{
    document.getElementById(xy).style.transform ="rotate("+0+"deg)";
    document.getElementById(xy).style.fontSize ="15px";
  }
  if(what == 'up'||what == 'down'||what == 'right'||what == 'left'){
    what = '➝';
  }
  else if(what == 'up_right'||what == 'down_left'||what == 'right_down'||what == 'left_up'){
    what = '↱';
  }
  else if(what == 'up_left'||what == 'down_right'||what == 'right_up'||what == 'left_down'){
    what = '↰';
  }
  document.documentElement.style.setProperty("--order","none");
  document.getElementById(xy).value = what;
}

function main(where){
  document.documentElement.style.setProperty("--order","block");
  document.documentElement.style.setProperty("--read","none");
  document.documentElement.style.setProperty("--save","none");
  xy = where;
}

function save(what){
  if(what == 'yes'){
    let name;
    if(document.getElementById('save_name').value == ""){
      name = "Mikisiプログラムデータ"
    }
    else{
      name = document.getElementById("save_name").value;
    }
    let a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([savedate],{type:"text/plain"}));
    a.target = '_blank';
    a.download = name +'.txt';
    a.click();
    document.documentElement.style.setProperty("--save","none");
  }
  else if(what == 'no'){
    document.documentElement.style.setProperty("--save","none");
  }
  else{
    document.documentElement.style.setProperty("--save","block");
    document.documentElement.style.setProperty("--order","none");
    document.documentElement.style.setProperty("--read","none");
  }
}

function read(what){
  if(what == 'yes'){
    if(document.getElementById('file').value != ""){
      let file = document.querySelector('#file').files[0];
      let files = new FileReader();
      files.readAsText(file);
      files.onload = function(){
        if(file.name.split('.').slice(-1)[0] == 'txt'){
          if(files.result.split(',').length == 100){
            let error_none = 0;
            for(let i = 0;i < 100;i++){
              if(order_typ.includes(files.result.split(',')[i])){}
              else{
                error_none = 1;
                break;
              }
            }
            if(error_none == 0){
              for(let i = 0;i < 100;i++){
                xy = i;
                order(files.result.split(',')[i]);
              }
              document.documentElement.style.setProperty("--read","none");
              document.getElementById("read_text").innerText = file.name;
              document.getElementById("save_name").value = file.name.replace('.txt','');
            }
            else{
              document.getElementById("file_error").innerText = "保存したデータを使って下さい。";
            }
          }
          else{
            document.getElementById("file_error").innerText = "保存したデータを使って下さい。";
          }
        }
        else{
          document.getElementById("file_error").innerText = "テキストファイルしかロードできません。";
        }
      }
    }
    else{
      document.getElementById("file_error").innerText = "ファイルを選択してください。";
    }
  }
  else if(what == 'no'){
    document.documentElement.style.setProperty("--read","none");
  }
  else if(what == 'order'){
    document.getElementById("file_error").innerText = "";
    document.documentElement.style.setProperty("--read","block");
    document.documentElement.style.setProperty("--save","none");
    document.documentElement.style.setProperty("--order","none");
  }
}

window_siz();
window.onresize = window_siz;
function window_siz(){
  if(window.innerWidth > 920){
    document.documentElement.style.setProperty("--order_left",window.innerWidth/2-351+"px");
    document.documentElement.style.setProperty("--save_left",window.innerWidth/2-200+"px");
    document.documentElement.style.setProperty("--read_left",window.innerWidth/2-240+"px");
    document.documentElement.style.setProperty("--result_size_width",window.innerWidth-790+"px");
    document.documentElement.style.setProperty("--use_size_width",window.innerWidth-190+"px");
  }
  else{
    document.documentElement.style.setProperty("--order_left","109px");
    document.documentElement.style.setProperty("--save_left","260px");
    document.documentElement.style.setProperty("--read_left","220px");
    document.documentElement.style.setProperty("--result_size_width","150px");
    document.documentElement.style.setProperty("--use_size_width","745px");
  }
}
