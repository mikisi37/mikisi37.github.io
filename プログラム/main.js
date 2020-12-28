let xy;
let savedate = ['none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none',
                'none','none','none','none','none','none','none','none','none','none'];

function order(what){
  savedate.splice(xy,1,what);
  if(what == 'up'){
    document.getElementById(xy).style.transform ="rotate("+270+"deg)";
    what = '➝';
  }
  else if(what == 'down'){
    document.getElementById(xy).style.transform ="rotate("+90+"deg)";
    what = '➝';
  }
  else if(what == 'right'){
    document.getElementById(xy).style.transform ="rotate("+0+"deg)";
    what = '➝';
  }
  else if(what == 'left'){
    document.getElementById(xy).style.transform ="rotate("+180+"deg)";
    what = '➝';
  }
  else if(what == 'none'){
    what = ' ';
  }
  else{
    document.getElementById(xy).style.transform ="rotate("+0+"deg)";
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
    let file = document.querySelector('#file').files[0];
    let files = new FileReader();
    files.readAsText(file);
    files.onload = function(){
      savedate = files.result;
      document.documentElement.style.setProperty("--read","none");
      document.getElementById("read_text").innerText = file.name;
      document.getElementById("save_name").value = file.name.replace('.txt','');
    }
  }
  else if(what == 'no'){
    document.documentElement.style.setProperty("--read","none");
  }
  else if(what == 'order'){
    document.documentElement.style.setProperty("--read","block");
    document.documentElement.style.setProperty("--save","none");
    document.documentElement.style.setProperty("--order","none");
  }
}

window_siz();
window.onresize = window_siz;
function window_siz(){
  if(window.innerWidth > 920){
    document.documentElement.style.setProperty("--order_left",window.innerWidth/2-195+"px");
    document.documentElement.style.setProperty("--save_left",window.innerWidth/2-200+"px");
    document.documentElement.style.setProperty("--read_left",window.innerWidth/2-240+"px");
    document.documentElement.style.setProperty("--result_size_width",window.innerWidth-790+"px");
    document.documentElement.style.setProperty("--use_size_width",window.innerWidth-190+"px");
  }
  else{
    document.documentElement.style.setProperty("--order_left","265px");
    document.documentElement.style.setProperty("--save_left","260px");
    document.documentElement.style.setProperty("--read_left","220px");
    document.documentElement.style.setProperty("--result_size_width","150px");
    document.documentElement.style.setProperty("--use_size_width","745px");
  }
}
