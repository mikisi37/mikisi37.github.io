//
//teki.js 敵関連
//

//敵弾クラス
class Teta extends CharaBase
{

	constructor(sn,x,y,vx,vy)
	{
		super(sn,x,y,vx,vy);
		this.r =4;
	}

	update()
	{
		super.update();

		if(!gameOver && !jiki.muteki && checkHit(
			this.x, this.y, /*this.w,this.h,*/ this.r,
			jiki.x, jiki.y,/*jiki.w,jiki.y,*/ jiki.r ) )
		{
			this.kill=true;

			if(( jiki.hp -= 20)<=0)
			{
				gameOver= true;
			}
			else
			{
				jiki.damage = 10;
				jiki.muteki = 60;
			}
		}
	}
}

//敵クラス
class Teki extends CharaBase
{
	constructor ( t,x,y,vx,vy )
	{
		super( 0,x,y,vx,vy );
		this.tnum = tekiMaster[t].tnum;
		this.r    = tekiMaster[t].r;
		this.hp   = tekiMaster[t].hp;
		this.score= tekiMaster[t].score;
		this.flag = false;
		//this.w =30;
		//this.h =16;
	}

	update()
	{
		//共通アップデート
		super.update();

		//個別アップデート
		tekiFunc[this.tnum](this);

		//当たり判定
		if(!gameOver && !jiki.muteki && checkHit(
			this.x, this.y, /*this.w,this.h,*/ this.r,
			jiki.x, jiki.y,/*jiki.w,jiki.y,*/ jiki.r ) )
		{
			this.kill=true;
			if(( jiki.hp -= 40)<=0)
			{
				gameOver= true;
			}
			else
			{
				jiki.damage = 10;
				jiki.muteki = 60;
			}
		}
	}
}

//敵４移動パターン
function tekiMove01(obj)
{
	if( !obj.flag)
	{
		if( jiki.x > obj.x && obj.vx<120 ) obj.vx+= 4;
		else if( jiki.x < obj.x && obj.vx>-120 ) obj.vx-= 4;
	}
	else
	{
		if( jiki.x < obj.x && obj.vx<400 ) obj.vx+= 30;
		else if( jiki.x > obj.x && obj.vx>-400 ) obj.vx-= 30;
	}
	if( Math.abs(jiki.y-obj.y) < (100<<8) &&!obj.flag )
	{
		obj.flag = true;

		if(gameOver)return;

		let an,dx,dy;
		an= Math.atan2( jiki.y-obj.y , jiki.x-obj.x );

		an += rand(-10,10)*Math.PI/180;

		dx= Math.cos(an)*1000;
		dy= Math.sin(an)*1000;

		teta.push( new Teta( 9,obj.x,obj.y, dx, dy) );
	}

	if( obj.flag && obj.vy>-800) obj.vy-=30;

	//スプライト変更
	obj.sn = 6;
}

//敵３移動パターン
function tekiMove02(obj)
{
	if( !obj.flag)
	{
		if( jiki.x > obj.x && obj.vx<350 ) obj.vx+= 15;
		else if( jiki.x < obj.x && obj.vx>-350 ) obj.vx-= 15;
	}
	else
	{
		if( jiki.x < obj.x && obj.vx<350 ) obj.vx+= 15;
		else if( jiki.x > obj.x && obj.vx>-350 ) obj.vx-= 15;
	}
	if( Math.abs(jiki.y-obj.y) < (100<<8) &&!obj.flag )
	{
		obj.flag = true;

		if(gameOver)return;

		let an,dx,dy;
		an= Math.atan2( jiki.y-obj.y , jiki.x-obj.x );

		an += rand(-10,10)*Math.PI/180;

		dx= Math.cos(an)*1000;
		dy= Math.sin(an)*1000;

		teta.push( new Teta( 10,obj.x,obj.y, dx, dy) );
	}

	//スプライト変更
	obj.sn = 5;
}

let tekiFunc = [
	tekiMove01,
	tekiMove02
];
