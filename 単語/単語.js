//単語数を指定(104まで)
max =  ;
//単語辞書
//スペル	訳
/*  aa= "";	ab= "";//1
  ac= "";	ad= "";//2
  ae= "";	af= "";//3
  ag= ""; ah= "";//4
  ai= ""; aj= "";//5
  ak= ""; al= "";//6
  am= ""; an= "";//7
  ao= ""; ap= "";//8
  aq= ""; ar= "";//9
  as= ""; at= "";//10
  au= ""; av= "";//11
  aw= ""; ax= "";//12
  ay= ""; az= "";//13
  ba= ""; bb= "";//14
  bc= ""; bd= "";//15
  be= ""; bf= "";//16
  bg= ""; bh= "";//17
  bi= ""; bj= "";//18
  bk= ""; bl= "";//19
  bm= ""; bn= "";//20
  bo= ""; bp= "";//21
  bq= ""; br= "";//22
  bs= ""; bt= "";//23
  bu= ""; bv= "";//24
  bw= ""; bx= "";//25
  by= ""; bz= "";//26
  ca= ""; cb= "";//27
  cc= ""; cd= "";//28
  ce= ""; cf= "";//29
  cg= ""; ch= "";//30
  ci= ""; cj= "";//31
  ck= ""; cl= "";//32
  cm= ""; cn= "";//33
  co= ""; cp= "";//34
  cq= ""; cr= "";//35
  cs= ""; ct= "";//36
  cu= ""; cv= "";//37
  cw= ""; cx= "";//38
  cy= ""; cz= "";//39
  da= ""; db= "";//40
  dc= ""; dd= "";//41
  de= ""; df= "";//42
  dg= ""; dh= "";//43
  di= ""; dj= "";//44
  dk= ""; dl= "";//45
  dm= ""; dn= "";//46
  do1= ""; dp= "";//47
  dq= ""; dr= "";//48
  ds= ""; dt= "";//49
  du= ""; dv= "";//50
  dw= ""; dx= "";//51
  dy= ""; dz= "";//52
  ea= ""; eb= "";//53
  ec= ""; ed= "";//54
  ee= ""; ef= "";//55
  eg= ""; eh= "";//56
  ei= ""; ej= "";//57
  ek= ""; el= "";//58
  em= ""; en= "";//59
  eo= ""; ep= "";//60
  eq= ""; er= "";//61
  es= ""; et= "";//62
  eu= ""; ev= "";//63
  ew= ""; ex= "";//64
  ey= ""; ez= "";//65
  fa= ""; fb= "";//66
  fc= ""; fd= "";//67
  fe= ""; ff= "";//68
  fg= ""; fh= "";//69
  fi= ""; fj= "";//70
  fk= ""; fl= "";//71
  fm= ""; fn= "";//72
  fo= ""; fp= "";//73
  fq= ""; fr= "";//74
  fs= ""; ft= "";//75
  fu= ""; fv= "";//76
  fw= ""; fx= "";//77
  fy= ""; fz= "";//78
  ga= ""; gb= "";//79
  gc= ""; gd= "";//80
  ge= ""; gf= "";//81
  gg= ""; gh= "";//82
  gi= ""; gj= "";//83
  gk= ""; gl= "";//84
  gm= ""; gn= "";//85
  go= ""; gp= "";//86
  gq= ""; gr= "";//87
  gs= ""; gt= "";//88
  gu= ""; gv= "";//89
  gw= ""; gx= "";//90
  gy= ""; gz= "";//91
  ha= ""; hb= "";//92
  hc= ""; hd= "";//93
  he= ""; hf= "";//94
  hg= ""; hh= "";//95
  hi= ""; hj= "";//96
  hk= ""; hl= "";//97
  hm= ""; hn= "";//98
  ho= ""; hp= "";//99
  hq= ""; hr= "";//100
  hs= ""; ht= "";//101
  hu= ""; hv= "";//102
  hw= ""; hx= "";//103
  hy= ""; hz= "";//104
*/
c=0
//問題作成
function loop() {

	//ランダムを出す
	a = Math.floor(Math.random() * max+1);
	b = Math.floor(Math.random() * 2);
/*
	if(a==1){
		if(b==0){
			question = aa;
			answer = ab;
		}
		else if(b==1){
			question = ab;
			answer = aa;
		}
	}
	else if(a==2){
		if(b==0){
			question = ac;
			answer = ad;
		}
		else if(b==1){
			question = ad;
			answer = ac;
		}
	}
	else if(a==3){
		if(b==0){
			question = ae;
			answer = af;
		}
		else if(b==1){
			question = af;
			answer = ae;
		}
	}
	else if(a==4){
		if(b==0){
			question = ag;
			answer = ah;
		}
		else if(b==1){
			question = ah;
			answer = ag;
		}
	}
	else if(a==5){
		if(b==0){
			question = ai;
			answer = aj;
		}
		else if(b==1){
			question = aj;
			answer = ai;
		}
	}
	else if(a==6){
		if(b==0){
			question = ak;
			answer = al;
		}
		else if(b==1){
			question = al;
			answer = ak;
		}
	}
	else if(a==7){
		if(b==0){
			question = am;
			answer = an;
		}
		else if(b==1){
			question = an;
			answer = am;
		}
	}
	else if(a==8){
		if(b==0){
			question = ao;
			answer = ap;
		}
		else if(b==1){
			question = ap;
			answer = ao;
		}
	}
	else if(a==9){
		if(b==0){
			question = aq;
			answer = ar;
		}
		else if(b==1){
			question = ar;
			answer = aq;
		}
	}
	else if(a==10){
		if(b==0){
			question = as;
			answer = at;
		}
		else if(b==1){
			question = at;
			answer = as;
		}
	}
	else if(a==11){
		if(b==0){
			question = au;
			answer = av;
		}
		else if(b==1){
			question = av;
			answer = au;
		}
	}
	else if(a==12){
		if(b==0){
			question = aw;
			answer = ax;
		}
		else if(b==1){
			question = ax;
			answer = aw;
		}
	}
	else if(a==13){
		if(b==0){
			question = ay;
			answer = az;
		}
		else if(b==1){
			question = az;
			answer = ay;
		}
	}
	else if(a==14){
		if(b==0){
			question = ba;
			answer = bb;
		}
		else if(b==1){
			question = bb;
			answer = ba;
		}
	}
	else if(a==15){
		if(b==0){
			question = bc;
			answer = bd;
		}
		else if(b==1){
			question = bd;
			answer = bc;
		}
	}
	else if(a==16){
		if(b==0){
			question = be;
			answer = bf;
		}
		else if(b==1){
			question = bf;
			answer = be;
		}
	}
	else if(a==17){
		if(b==0){
			question = bg;
			answer = bh;
		}
		else if(b==1){
			question = bh;
			answer = bg;
		}
	}
	else if(a==18){
		if(b==0){
			question = bi;
			answer = bj;
		}
		else if(b==1){
			question = bj;
			answer = bi;
		}
	}
	else if(a==19){
		if(b==0){
			question = bk;
			answer = bl;
		}
		else if(b==1){
			question = bl;
			answer = bk;
		}
	}
	else if(a==20){
		if(b==0){
			question = bm;
			answer = bn;
		}
		else if(b==1){
			question = bn;
			answer = bm;
		}
	}
	else if(a==21){
		if(b==0){
			question = bo;
			answer = bp;
		}
		else if(b==1){
			question = bp;
			answer = bo;
		}
	}
	else if(a==22){
		if(b==0){
			question = bq;
			answer = br;
		}
		else if(b==1){
			question = br;
			answer = bq;
		}
	}
	else if(a==23){
		if(b==0){
			question = bs;
			answer = bt;
		}
		else if(b==1){
			question = bt;
			answer = bs;
		}
	}
	else if(a==24){
		if(b==0){
			question = bu;
			answer = bv;
		}
		else if(b==1){
			question = bv;
			answer = bu;
		}
	}
	else if(a==25){
		if(b==0){
			question = bw;
			answer = bx;
		}
		else if(b==1){
			question = bx;
			answer = bw;
		}
	}
	else if(a==26){
		if(b==0){
			question = by;
			answer =bz ;
		}
		else if(b==1){
			question = bz;
			answer = by;
		}
	}
	else if(a==27){
		if(b==0){
			question = ca;
			answer = cb;
		}
		else if(b==1){
			question = cb;
			answer = ca;
		}
	}
	else if(a==28){
		if(b==0){
			question = cc;
			answer = cd;
		}
		else if(b==1){
			question = cd;
			answer = cc;
		}
	}
	else if(a==29){
		if(b==0){
			question = ce;
			answer = cf;
		}
		else if(b==1){
			question = cf;
			answer = ce;
		}
	}
	else if(a==30){
		if(b==0){
			question = cg;
			answer = ch;
		}
		else if(b==1){
			question = ch;
			answer = cg;
		}
	}
	else if(a==31){
		if(b==0){
			question = ci;
			answer = cj;
		}
		else if(b==1){
			question = cj;
			answer = ci;
		}
	}
	else if(a==32){
		if(b==0){
			question = ck;
			answer = cl;
		}
		else if(b==1){
			question = cl;
			answer = ck;
		}
	}
	else if(a==33){
		if(b==0){
			question = cm;
			answer = cn;
		}
		else if(b==1){
			question = cn;
			answer = cm;
		}
	}
	else if(a==34){
		if(b==0){
			question = co;
			answer = cp;
		}
		else if(b==1){
			question = cp;
			answer = co;
		}
	}
	else if(a==35){
		if(b==0){
			question = cq;
			answer = cr;
		}
		else if(b==1){
			question = cr;
			answer = cq;
		}
	}
	else if(a==36){
		if(b==0){
			question = cs;
			answer = ct;
		}
		else if(b==1){
			question = ct;
			answer = cs;
		}
	}
	else if(a==37){
		if(b==0){
			question = cu;
			answer = cv;
		}
		else if(b==1){
			question = cv;
			answer = cu;
		}
	}
	else if(a==38){
		if(b==0){
			question = cw;
			answer = cx;
		}
		else if(b==1){
			question = cx;
			answer = cw;
		}
	}
	else if(a==39){
		if(b==0){
			question = cy;
			answer = cz ;
		}
		else if(b==1){
			question = cz;
			answer = cy;
		}
	}
	else if(a==40){
		if(b==0){
			question = da;
			answer = db;
		}
		else if(b==1){
			question = db;
			answer = da;
		}
	}
	else if(a==41){
		if(b==0){
			question = dc;
			answer = dd;
		}
		else if(b==1){
			question = dd;
			answer = dc;
		}
	}
	else if(a==42){
		if(b==0){
			question = de;
			answer = df;
		}
		else if(b==1){
			question = df;
			answer = de;
		}
	}
	else if(a==43){
		if(b==0){
			question = dg;
			answer = dh;
		}
		else if(b==1){
			question = dh;
			answer = dg;
		}
	}
	else if(a==44){
		if(b==0){
			question = di;
			answer = dj;
		}
		else if(b==1){
			question = dj;
			answer = di;
		}
	}
	else if(a==45){
		if(b==0){
			question = dk;
			answer = dl;
		}
		else if(b==1){
			question = dl;
			answer = dk;
		}
	}
	else if(a==46){
		if(b==0){
			question = dm;
			answer = dn;
		}
		else if(b==1){
			question = dn;
			answer = dm;
		}
	}
	else if(a==47){
		if(b==0){
			question = do1;
			answer = dp;
		}
		else if(b==1){
			question = dp;
			answer = do1;
		}
	}
	else if(a==48){
		if(b==0){
			question = dq;
			answer = dr;
		}
		else if(b==1){
			question = dr;
			answer = dq;
		}
	}
	else if(a==49){
		if(b==0){
			question = ds;
			answer = dt;
		}
		else if(b==1){
			question = dt;
			answer = ds;
		}
	}
	else if(a==50){
		if(b==0){
			question = du;
			answer = dv;
		}
		else if(b==1){
			question = dv;
			answer = du;
		}
	}
	else if(a==51){
		if(b==0){
			question = dw;
			answer = dx;
		}
		else if(b==1){
			question = dx;
			answer = dw;
		}
	}
	else if(a==52){
		if(b==0){
			question = dy;
			answer = dz;
		}
		else if(b==1){
			question = dz;
			answer = dy;
		}
	}
	else if(a==53){
		if(b==0){
			question = ea;
			answer = eb;
		}
		else if(b==1){
			question = eb;
			answer = ea;
		}
	}
	else if(a==54){
		if(b==0){
			question = ec;
			answer = ed;
		}
		else if(b==1){
			question = ed;
			answer = ec;
		}
	}
	else if(a==55){
		if(b==0){
			question = ee;
			answer = ef;
		}
		else if(b==1){
			question = ef;
			answer = ee;
		}
	}
	else if(a==56){
		if(b==0){
			question = eg;
			answer = eh;
		}
		else if(b==1){
			question = eh;
			answer = eg;
		}
	}
	else if(a==57){
		if(b==0){
			question = ei;
			answer = ej;
		}
		else if(b==1){
			question = ej;
			answer = ei;
		}
	}
	else if(a==58){
		if(b==0){
			question = ek;
			answer = el;
		}
		else if(b==1){
			question = el;
			answer = ek;
		}
	}
	else if(a==59){
		if(b==0){
			question = em;
			answer = en;
		}
		else if(b==1){
			question = en;
			answer = em;
		}
	}
	else if(a==60){
		if(b==0){
			question = eo;
			answer = ep;
		}
		else if(b==1){
			question = ep;
			answer = eo;
		}
	}
	else if(a==61){
		if(b==0){
			question = eq;
			answer = er;
		}
		else if(b==1){
			question = er;
			answer = eq;
		}
	}
	else if(a==62){
		if(b==0){
			question = es;
			answer = et;
		}
		else if(b==1){
			question = et;
			answer = es;
		}
	}
	else if(a==63){
		if(b==0){
			question = eu;
			answer = ev;
		}
		else if(b==1){
			question = ev;
			answer = eu;
		}
	}
	else if(a==64){
		if(b==0){
			question = ew;
			answer = ex;
		}
		else if(b==1){
			question = ex;
			answer = ew;
		}
	}
	else if(a==65){
		if(b==0){
			question = ey;
			answer = ez;
		}
		else if(b==1){
			question = ez;
			answer = ey;
		}
	}
	else if(a==66){
		if(b==0){
			question = fa;
			answer = fb;
		}
		else if(b==1){
			question = fb;
			answer = fa;
		}
	}
	else if(a==67){
		if(b==0){
			question = fc;
			answer = fd;
		}
		else if(b==1){
			question = fd;
			answer = fc;
		}
	}
	else if(a==68){
		if(b==0){
			question = fe;
			answer = ff;
		}
		else if(b==1){
			question = ff;
			answer = fe;
		}
	}
	else if(a==69){
		if(b==0){
			question = fg;
			answer = fh;
		}
		else if(b==1){
			question = fh;
			answer = fg;
		}
	}
	else if(a==70){
		if(b==0){
			question = fi;
			answer = fj;
		}
		else if(b==1){
			question = fj;
			answer = fi;
		}
	}
	else if(a==71){
		if(b==0){
			question = fk;
			answer = fl;
		}
		else if(b==1){
			question = fl;
			answer = fk;
		}
	}
	else if(a==72){
		if(b==0){
			question = fm;
			answer = fn;
		}
		else if(b==1){
			question = fn;
			answer = fm;
		}
	}
	else if(a==73){
		if(b==0){
			question = fo;
			answer = fp;
		}
		else if(b==1){
			question = fp;
			answer = fo;
		}
	}
	else if(a==74){
		if(b==0){
			question = fq;
			answer = fr;
		}
		else if(b==1){
			question = fr;
			answer = fq;
		}
	}
	else if(a==75){
		if(b==0){
			question = fs;
			answer = ft;
		}
		else if(b==1){
			question = ft;
			answer = fs;
		}
	}
	else if(a==76){
		if(b==0){
			question = fu;
			answer = fv;
		}
		else if(b==1){
			question = fv;
			answer = fu;
		}
	}
	else if(a==77){
		if(b==0){
			question = fw;
			answer = fx;
		}
		else if(b==1){
			question = fx;
			answer = fw;
		}
	}
	else if(a==78){
		if(b==0){
			question = fy;
			answer = fz;
		}
		else if(b==1){
			question = fz;
			answer = fy;
		}
	}
	else if(a==79){
		if(b==0){
			question = ga;
			answer = gb;
		}
		else if(b==1){
			question = gb;
			answer = ga;
		}
	}
	else if(a==80){
		if(b==0){
			question = gc;
			answer = gd;
		}
		else if(b==1){
			question = gd;
			answer = gc;
		}
	}
	else if(a==81){
		if(b==0){
			question = ge;
			answer = gf;
		}
		else if(b==1){
			question = gf;
			answer = ge;
		}
	}
	else if(a==82){
		if(b==0){
			question = gg;
			answer = gh;
		}
		else if(b==1){
			question = gh;
			answer = gg;
		}
	}
	else if(a==83){
		if(b==0){
			question = gi;
			answer = gj;
		}
		else if(b==1){
			question = gj;
			answer = gi;
		}
	}
	else if(a==84){
		if(b==0){
			question = gk;
			answer = gl;
		}
		else if(b==1){
			question = gl;
			answer = gk;
		}
	}
	else if(a==85){
		if(b==0){
			question = gm;
			answer = gn;
		}
		else if(b==1){
			question = gn;
			answer = gm;
		}
	}
	else if(a==86){
		if(b==0){
			question = go;
			answer = gp;
		}
		else if(b==1){
			question = gp;
			answer = go;
		}
	}
	else if(a==87){
		if(b==0){
			question = gq;
			answer = gr;
		}
		else if(b==1){
			question = gr;
			answer = gq;
		}
	}
	else if(a==88){
		if(b==0){
			question = gs;
			answer = gt;
		}
		else if(b==1){
			question = gt;
			answer = gs;
		}
	}
	else if(a==89){
		if(b==0){
			question = gu;
			answer = gv;
		}
		else if(b==1){
			question = gv;
			answer = gu;
		}
	}
	else if(a==90){
		if(b==0){
			question = gw;
			answer = gx;
		}
		else if(b==1){
			question = gx;
			answer = gw;
		}
	}
	else if(a==91){
		if(b==0){
			question = gy;
			answer = gz;
		}
		else if(b==1){
			question = gz;
			answer = gy;
		}
	}
	else if(a==92){
		if(b==0){
			question = ha;
			answer = hb;
		}
		else if(b==1){
			question = hb;
			answer = ha;
		}
	}
	else if(a==93){
		if(b==0){
			question = hc;
			answer = hd;
		}
		else if(b==1){
			question = hd;
			answer = hc;
		}
	}
	else if(a==94){
		if(b==0){
			question = he;
			answer = hf;
		}
		else if(b==1){
			question = hf;
			answer = he;
		}
	}
	else if(a==95){
		if(b==0){
			question = hg;
			answer = hh;
		}
		else if(b==1){
			question = hh;
			answer = hg;
		}
	}
	else if(a==96){
		if(b==0){
			question = hi;
			answer = hj;
		}
		else if(b==1){
			question = hj;
			answer = hi;
		}
	}
	else if(a==97){
		if(b==0){
			question = hk;
			answer = hl;
		}
		else if(b==1){
			question = hl;
			answer = hk;
		}
	}
	else if(a==98){
		if(b==0){
			question = hm;
			answer = hn;
		}
		else if(b==1){
			question = hn;
			answer = hm;
		}
	}
	else if(a==99){
		if(b==0){
			question = ho;
			answer = hp;
		}
		else if(b==1){
			question = hp;
			answer = ho;
		}
	}
	else if(a==100){
		if(b==0){
			question = hq;
			answer = hr;
		}
		else if(b==1){
			question = hr;
			answer = hq;
		}
	}
	else if(a==101){
		if(b==0){
			question = hs;
			answer = ht;
		}
		else if(b==1){
			question = ht;
			answer = hs;
		}
	}
	else if(a==102){
		if(b==0){
			question = hu;
			answer = hv;
		}
		else if(b==1){
			question = hv;
			answer = hu;
		}
	}
	else if(a==103){
		if(b==0){
			question = hw;
			answer = hx;
		}
		else if(b==1){
			question = hx;
			answer = hw;
		}
	}
	else if(a==104){
		if(b==0){
			question = hy;
			answer = hz;
		}
		else if(b==1){
			question = hz;
			answer = hy;
		}
	}
	*/
	document.getElementById("greet").innerHTML = question;
	document.getElementById("start").innerHTML = "答え合わせ";
}
loop();

//答え合わせ
function btnClick(){
	c+=1
	input = document.getElementById("input").value;
	if(input==answer){
		alert("正解")
	}
	else if(c>1){
		alert("答え・・・"+answer)
	}
	loop();
}
