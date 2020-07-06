//
//date.js スプライトデータなど
//

//スプライトクラス
class Sprite
{
	constructor(x,y, w,h)
	{
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
}

//スプライト
let sprite=[
	new Sprite(0,0,43,40),//0 戦闘機

	new Sprite(0,40,3,6),//1 弾1
	new Sprite(4,40,5,5),//2 弾2
	new Sprite(11,40,5,5),//3 弾3

	new Sprite(220,86,23,17),//4 敵1
	new Sprite(255,87,20,14),//5 敵2
	new Sprite(280,87,20,14),//6 敵3
	new Sprite(318,82,30,16),//7 敵4

  new Sprite(79,126,15,16),//8 爆発小
  new Sprite(104,124,22,21),//9 爆発中
];
