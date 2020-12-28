var xy;

function order(what){
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
  else{
    document.getElementById(xy).style.transform ="rotate("+0+"deg)";
  }
  document.documentElement.style.setProperty("--order","none");
  document.getElementById(xy).value = what;
}

function main(where){
  document.documentElement.style.setProperty("--order","block");
  xy = where;
}

window_siz();
window.onresize = window_siz;
function window_siz(){
  if(window.innerWidth > 920){
    document.documentElement.style.setProperty("--result_size_width",window.innerWidth-790+"px");
    document.documentElement.style.setProperty("--use_size_width",window.innerWidth-170+"px");
  }
  else{
    document.documentElement.style.setProperty("--result_size_width","150px");
    document.documentElement.style.setProperty("--use_size_width","745px");
  }
}
