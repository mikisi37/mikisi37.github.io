//
//date.js スプライトデータなど
//

//敵マスター
class TekiMaster
{
	constructor(tnum,r ,hp, score)
	{
		this.tnum = tnum;
		this.r    = r;
		this.hp   = hp;
		this.score= score;
	}
}

let tekiMaster=
[
	new TekiMaster(0, 10, 80,30),
	new TekiMaster(1, 10, 1,10),
]

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

	new Sprite(220,86,23,17),//3 敵1
	new Sprite(255,87,20,14),//4 敵2
	new Sprite(280,87,20,14),//5 敵3
	new Sprite(318,82,30,16),//6 敵4

  new Sprite(79,126,15,16),//7 爆発小
  new Sprite(104,124,22,21),//8 爆発中

	new Sprite(11,40,5,5),//9 敵弾1
	new Sprite(19,40,5,5),//10 敵弾2
];
