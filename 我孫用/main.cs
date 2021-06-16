using System;
using System.IO;
using System.Text;
using System.Drawing;
using System.Windows.Forms;
using System.Collections.Generic;

//グローバル関数
public class Global{
  public static string Initial = "00000000000000000000000000012000000210000000000000000000000000001";
  public static string Server = @"C:\Users\Mikisi\Documents\Program\c++\C#\";
  public static string SaveP = "test.txt";
  public static string ServerF;
  public static string Account;
  public static string List;
  public static char NowT;
  public static char MyT = '1';
  public static char YoT = '2';
  public static bool GameS = false;
  public static List<int> ListT = new List<int>();
}

//メイン
class Program{
  static void Main(){
    if(!System.IO.File.Exists("Account.txt")){
      Sub.MakeA();
    }

    Global.Account = File.Read("Account.txt").TrimEnd('\r', '\n');
    Sub.StartU();
    Application.Run(new Form1());
  }
}

//ゲームウィンドウ
class Form1 : Form{
  public Form1(){
    this.StartPosition = FormStartPosition.CenterScreen;
    this.MinimumSize = new Size(636,659);
    this.Icon = new System.Drawing.Icon("main.ico");
    this.Text = "リバーシ";
    this.DoubleBuffered = true;
    this.BackColor = Color.FromArgb(0x19,0x19,0x70);
    this.MouseClick += new MouseEventHandler(MClick);

    Timer timer = new Timer();
    timer.Interval = 33;
    timer.Tick += new EventHandler(Update);
    timer.Start();
  }

  //ループ
  void Update(object sender, EventArgs e){
    Invalidate();
  }

  //マウスクリック
  void MClick(object sende,MouseEventArgs e){
    Console.WriteLine("{0},{1}",e.X,e.Y);
    Global.GameS = true;
    Global.List = File.Read(Global.SaveP);
    //Play.Put(29);
  }

  //描画処理
  protected override void OnPaint(PaintEventArgs e){
    int WinW = this.ClientSize.Width -20;
    int WinH = this.ClientSize.Height -20;
    int FieldS;
    int GapW = 0;
    int GapH = 0;
    int RoundG;

    //色指定
    Graphics g = e.Graphics;
    SolidBrush brushF = new SolidBrush(Color.FromArgb(0x00,0x80,0x00));
    SolidBrush brushT = new SolidBrush(Color.FromArgb(0x77,0x77,0x77));
    SolidBrush brushW = new SolidBrush(Color.White);
    SolidBrush brushB = new SolidBrush(Color.Black);
    Pen penB = new Pen(Color.Black,3);

    if(WinW < WinH){
      FieldS = WinW /8;
      GapH = (WinH -WinW) /2;
    }
    else if(WinH < WinW){
      FieldS = WinH /8;
      GapW = (WinW -WinH) /2;
    }
    else{FieldS = WinW /8;}

    //ゲーム中描画
    if(Global.GameS){
      int Count = 0;
      int CountT = 0;
      int CountB = 0;
      int CountW = 0;
      Global.List = File.Read(Global.SaveP);
      Global.NowT = Global.List[64];
      Global.ListT.Clear();
      RoundG = FieldS * 10 /75;

      //置ける場所特定
      for(int i = 0;i < 64;i++){
        if(Global.List[i] == '1' && Global.MyT == '2'){
          Play.PutT(i);
        }
        else if(Global.List[i] == '2' && Global.MyT == '1'){
          Play.PutT(i);
        }
      }

      //駒、置ける場所表示
      for(int y = 0; y < 8; y++){
        for(int x = 0; x < 8; x++){
          int Sx = x *FieldS +GapW +10;
          int Sy = y *FieldS +GapH +10;
          char Status = Global.List[x +y *8];

          Rectangle rect = new Rectangle(Sx, Sy, FieldS, FieldS);
          Rectangle round = new Rectangle(Sx +RoundG, Sy +RoundG, FieldS -RoundG *2, FieldS -RoundG *2);
          g.DrawRectangle(penB,rect);
          g.FillRectangle(brushF,rect);

          if(Status == '1'){
            g.FillEllipse(brushB,round);
            CountB++;
          }
          else if(Status == '2'){
            g.FillEllipse(brushW,round);
            CountW++;
          }
          else if(Global.ListT.Contains(x +y *8) && Global.MyT == Global.NowT){
            g.FillEllipse(brushT,Sx +RoundG *2, Sy +RoundG *2, FieldS -RoundG *4, FieldS -RoundG *4);
            CountT++;
          }
        }
      }

      //置ける場所がないとき
      if(CountT == 0){
        List<string> ListN = new List<string>(){};
        foreach(char Copy in Global.List){
          ListN.Add(Copy.ToString());
        }
        ListN[64] = Global.YoT.ToString();
        File.Write(Global.SaveP, String.Join("",ListN.ToArray()));
      }

      //勝敗
      Count = CountB + CountW;
      if(CountB == 0 || CountW == 0 || Count == 64){
        Global.GameS = false;
      }

      //情報表示
      Font font = new Font("Times New Roman", RoundG *3 /2, FontStyle.Regular);
      string text = string.Format("石：総数{0}　黒{1},　白{2}",Count,CountB,CountW);
      g.DrawString(text,font,brushW, 0, 0);

    }

    brushF.Dispose();
    brushT.Dispose();
    brushW.Dispose();
    brushB.Dispose();
    penB.Dispose();

  }
}

class Play{
  static List<int> Cons = new List<int>(){-9,-8,-7,-1,1,7,8,9};

  //置ける場所特定
  public static void PutT(int Place){
    foreach(int i in Cons){
      int Place1 = Place;
      int Place2 = Place + i;

      if(Global.List[Place2] == '0'){
        while(true){
          if(Place1 < 0 && Place1 > 64 || Global.List[Place1] == '0'){
            break;
          }
          else if(Global.List[Place1] == Global.MyT){
            Global.ListT.Add(Place2);
            break;
          }

          Place1 -= i;
        }
      }
    }
  }

  //駒をひっくり返す処理
  public static void Put(int Place){
    List<string> ListN = new List<string>(){};
    foreach(char Copy in Global.List){
      ListN.Add(Copy.ToString());
    }
    ListN[Place] = Global.MyT.ToString();

    foreach(int i in Cons){
      int Place1 = Place + i;
      var PutO = new List<int>(){};

      if(Global.List[Place1] == Global.YoT){
        while(true){
          if(Global.List[Place1] == '0'){
            break;
          }
          else if(Global.List[Place1] == Global.MyT){
            foreach(int ii in PutO){
              ListN[ii] = Global.MyT.ToString();
            }
            break;
          }
          else{
            PutO.Add(Place1);
          }

          Place1 += i;
        }
      }
    }

    ListN[64] = Global.YoT.ToString();
    File.Write(Global.SaveP, String.Join("",ListN.ToArray()));
  }
}

//ファイル
class File{

  //読み込み
  public static string Read(string File){
    StreamReader sr = new StreamReader(File, Encoding.GetEncoding("Shift_JIS"));
    string text = sr.ReadToEnd();
    sr.Close();
    return text;
  }

  //書き込み
  public static void Write(string File,string Date){
    Encoding sjisEnc = Encoding.GetEncoding("Shift_JIS");
    StreamWriter writer = new StreamWriter(File, false, sjisEnc);
    writer.WriteLine(Date);
    writer.Close();
  }
}
