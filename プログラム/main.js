function main(where){
  document.getElementById(where).value="aaaaa";
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
