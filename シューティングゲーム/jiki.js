//
//jiki.js 時期関連
//

//弾クラス
class Tama extends CharaBase
{
	constructor ( x,y,vx,vy )
	{
		super( 2,x,y,vx,vy );
		//this.w =5;
		//this.h =5;
		this.r =5;
	}

	update()
	{
		super.update();

		for( let i=0; i<teki.length ;i++)
		{
			if( !teki[i].kill )
			{
				if( checkHit(
					this.x, this.y, /*this.w,this.h,*/ this.r,
					teki[i].x, teki[i].y,/*teki[i].w,teki[i].y,*/ teki[i].r ) )
				{
					this.kill=true;

					if((teki[i].hp-= 40)<=0)
					{
					teki[i].kill=true;

					explosion(
						         teki[i].x, teki[i].y,teki[i].vx>>3,teki[i].vy>>3 );
										 score += teki[i].score;
					}
					else
					{
						expl.push( new Expl(7,teki[i].x,teki[i].y,0,0));
					}

					break;
				}
			}
		}
	}

	draw()
	{
		super.draw();
	}
}

//戦闘機クラス
class Jiki
{
	constructor()
	{
		this.x  = (FIELD_W/2)<<8;
		this.y  = (FIELD_H-50)<<8;
		this.mhp= 100;
		this.hp = this.mhp;

		this.speed  = 512;
		this.reload = 0;
		this.relo2  = 0;
		this.r      = 17;
		this.damage = 0;
		this.muteki = 0;
		this.count  = 0;

	}

	//戦闘機の移動
	update()
	{
		this.count++;
		if (this.damage)this.damage--;
		if (this.muteki)this.muteki--;

		//スキル1
		if( key[16] && this.reload==0 && sukiru ==1)
		{
			tama.push( new Tama(this.x,this.y-(4<<8), 0,-2000 ) );
			this.reload=6;
			if(++this.relo2 ==4)
			{
				this.reload=20;
				this.relo2=0;
			}
		}
		//スキル2
		if( key[16] && this.reload==0 && sukiru ==2)
		{
			tama.push( new Tama(this.x+(6<<8),this.y-(4<<8), 40,-2000 ) );
			tama.push( new Tama(this.x-(6<<8),this.y-(4<<8), -40,-2000 ) );
			this.reload=6;
			if(++this.relo2 ==4)
			{
				this.reload=20;
				this.relo2=0;
			}
		}
		//スキル3
			if( key[16] && this.reload==0 && sukiru ==3)
			{
				tama.push( new Tama(this.x,this.y-(4<<8), 0,-2000 ) );
				tama.push( new Tama(this.x+(8<<8),this.y-(4<<8), 40,-2000 ) );
				tama.push( new Tama(this.x-(8<<8),this.y-(4<<8), -40,-2000 ) );
				this.reload=6;
				if(++this.relo2 ==4)
				{
					this.reload=20;
					this.relo2=0;
				}
			}
			//スキル4
			if( key[16] && this.reload==0 && sukiru ==4)
			{
				tama.push( new Tama(this.x+(5<<8),this.y-(4<<8), 40,-2000 ) );
				tama.push( new Tama(this.x-(5<<8),this.y-(4<<8), -40,-2000 ) );
				tama.push( new Tama(this.x+(13<<8),this.y-(4<<8), 40,-2000 ) );
				tama.push( new Tama(this.x-(13<<8),this.y-(4<<8), -40,-2000 ) );
				this.reload=6;
				if(++this.relo2 ==4)
				{
					this.reload=20;
					this.relo2=0;
				}
			}
			//スキル5
			if( key[16] && this.reload==0 && sukiru >=5)
			{
				tama.push( new Tama(this.x,this.y-(4<<8), 0,-2000 ) );
				tama.push( new Tama(this.x+(6<<8),this.y-(4<<8), 40,-2000 ) );
				tama.push( new Tama(this.x-(6<<8),this.y-(4<<8), -40,-2000 ) );
				tama.push( new Tama(this.x+(14<<8),this.y-(4<<8), 40,-2000 ) );
				tama.push( new Tama(this.x-(14<<8),this.y-(4<<8), -40,-2000 ) );
				this.reload=6;
				if(++this.relo2 ==4)
				{
					this.reload=20;
					this.relo2=0;
				}
			}

			/*
			tama.push( new Tama(this.x+(8<<8),this.y-(4<<8), 80,-2000 ) );
			tama.push( new Tama(this.x-(8<<8),this.y-(4<<8), -80,-2000 ) );
			tama.push( new Tama(this.x+(16<<8),this.y-(4<<8), 80,-2000 ) );
			tama.push( new Tama(this.x-(16<<8),this.y-(4<<8), -80,-2000 ) );
			*/


		if( !key[16] )this.reload= this.relo2=0;

		if(this.reload>0 ) this.reload--;

		if( key[65] && this.x>this.speed )this.x-=this.speed;
		if( key[87] && this.y>this.speed )this.y-=this.speed;
		if( key[68] && this.x<= (FIELD_W<<8)-this.speed )this.x+=this.speed;
		if( key[83] && this.y<= (FIELD_H<<8)-this.speed )this.y+=this.speed;
	}
	//描画
	draw()
	{
		if(this.muteki && (this.count&1)) return;
		drawSprite(0, this.x, this.y);
	}
}
