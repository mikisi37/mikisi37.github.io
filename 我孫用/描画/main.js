var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var sx, sy;
var Point = [100,0,-100,0,0,100];
var Start = 0;var Vertex = 3;

function Pixel(x,y){
  ctx.fillRect(sx + x, sy - y, 1, 1);
}

function main(){
  Pixel(0,0);

  for(var Count = Start; Count < Start + Vertex * 2; Count += 6){
				var Width = [Point[Count], Point[Count]];
				var Height = [Point[Count + 1], Point[Count + 1]];
				for(var i = Count / 2 + 1; i < Count / 2 + 3; i++){
					if(Width[0] > Point[i *2]){ Width[0] = Point[i *2];}
					if(Width[1] < Point[i *2]){ Width[1] = Point[i *2];}
					if(Height[0] > Point[i *2 + 1]){ Height[0] = Point[i *2 + 1];}
					if(Height[1] < Point[i *2 + 1]){ Height[1] = Point[i *2 + 1];}
				}
				for(var y = Height[0]; y < Height[1]; y++){
					for(var x = Width[0]; x < Width[1]; x++){
						var px = x - Point[Count];
						var py = y - Point[Count + 1];
						var bx = Point[Count + 2] - Point[Count];
						var by = Point[Count + 3] - Point[Count + 1];
						var cx = Point[Count + 4] - Point[Count];
						var cy = Point[Count + 5] - Point[Count + 1];
						var s = (px * cy - py * cx) / (bx * cy - by * cx);
						var t = (px - bx * s) / cx;
						if(0 <= s && 0 <= t && s + t <= 1){ Pixel(x, y);}
					}
				}
  }
}


function sab(){
  canvas.width = 	document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight - 7;
  sx = canvas.width / 2;
  sy = canvas.height / 2;
  ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = 'rgb( 0, 0, 0)';
  ctx.fillRect(0, 0, sx * 2, sy * 2);
  ctx.fillStyle = 'rgb( 255, 0, 0)';
  main();
}

var interval = setInterval(sab,5);
