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
  public static string ServerF;
  public static string Account;
  public static string ServerP;
  public static string List;
  public static char NowT;
  public static char MyT = '1';
  public static char YoT = '2';
  public static bool GameS = false;
  public static List<int> ListT = new List<int>();
  public static List<int> ListF = new List<int>(){0,0,0};
  public static List<string> OnlineP = new List<string>();
}

//メイン
class Program{
  static void Main(){
    Sub.Online();
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
  Label label = new Label();
  Button button = new Button();
  ListView listbox = new ListView();

  public Form1(){
    this.StartPosition = FormStartPosition.CenterScreen;
    this.MinimumSize = new Size(636,659);
    this.Icon = new System.Drawing.Icon("main.ico");
    this.Text = "リバーシ";
    this.DoubleBuffered = true;
    this.BackColor = Color.FromArgb(0x19,0x19,0x70);
    this.MouseClick += new MouseEventHandler(MClick);

    int Size = this.ClientSize.Width /9;
    button.Text = "Play";
    button.Font = new Font(label.Font.FontFamily, Size);
    button.Location = new Point(200, 250);
    button.BackColor = Color.FromArgb(0xff,0xff,0xff);
    button.Anchor = AnchorStyles.None;
    button.Click += new EventHandler(button_Click);
    button.AutoSize = true;
    this.Controls.Add(button);

    listbox.Width = 500;
    listbox.Height = 500;
    listbox.Location = new Point(68, 10);
    listbox.Font = new Font(label.Font.FontFamily, Size /2);
    listbox.Anchor = (AnchorStyles.Top | AnchorStyles.Left);
    listbox.MouseClick += new MouseEventHandler(list_Click);
    this.Controls.Add(listbox);
    listbox.Visible = false;

    Timer timer = new Timer();
    timer.Interval = 33;
    timer.Tick += new EventHandler(Update);
    timer.Start();
  }

  private void button_Click(object sender,EventArgs e){
    listbox.Items.Clear();
    foreach(string i in Global.OnlineP){
      listbox.Items.Add(i);
    }

    button.Visible = false;
    listbox.Visible = true;
  }

  private void list_Click(object sender, MouseEventArgs e){
    Console.WriteLine(listbox.SelectedItems[0]);
  }


  //ループ
  void Update(object sender, EventArgs e){
    if(!Global.GameS){
      Sub.Online();

    }

    Invalidate();
  }

  //マウスクリック
  void MClick(object sende,MouseEventArgs e){
    int Place = (e.X - Global.ListF[1]) / Global.ListF[0] + (e.Y - Global.ListF[2]) / Global.ListF[0] * 8;

    if(Global.GameS && Global.NowT == Global.MyT && Global.ListT.Contains(Place)){
      Play.Put(Place);
    }
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
    Global.ListF[0] = FieldS;
    Global.ListF[1] = GapW + 10;
    Global.ListF[2] = GapH + 10;

    //ゲーム中描画
    if(Global.GameS){
      listbox.Visible = false;

      int Count = 0;
      int CountT = 0;
      int CountB = 0;
      int CountW = 0;
      Global.List = File.Read(Global.ServerP).TrimEnd('\r', '\n');
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
      if(CountT == 0 && Global.NowT == Global.MyT){
        List<string> ListN = new List<string>(){};
        foreach(char Copy in Global.List){
          ListN.Add(Copy.ToString());
        }
        ListN[64] = Global.YoT.ToString();
        File.Write(Global.ServerP, String.Join("",ListN.ToArray()));
      }

      //勝敗
      Count = CountB + CountW;
      if(CountB == 0 || CountW == 0 || Count == 64){
        Global.GameS = false;
        button.Visible = false;
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
  static List<int> Cons1 = new List<int>(){-8,-7,1,8,9};
  static List<int> Cons2 = new List<int>(){-9,-8,-1,7,8};
  static List<int> Cons3 = new List<int>(){-1,1,7,8,9};
  static List<int> Cons4 = new List<int>(){-9,-8,-7,-1,1};


  //置ける場所特定
  public static void PutT(int Place){
    var ConsX = Cons;
    var ConsY = Cons;
    if(Place % 8 == 0){
      ConsX = Cons1;
    }
    else if(Place % 8 == 7){
      ConsX = Cons2;
    }
    if(Place / 8 == 0){
      ConsY = Cons3;
    }
    else if(Place / 8 == 7){
      ConsY = Cons4;
    }
    var ConsM = ConsX.FindAll(ConsY.Contains);


    foreach(int i in ConsM){
      int PlaceS = Place;
      int Place1 = Place;
      int Place2 = Place + i;

      if(Global.List[Place2] == '0'){
        while(true){
          if(Place1 < 0 && Place1 > 64 || Global.List[Place1] == '0'){
            break;
          }
          else if(Place1 % 8 == 0 || Place1 % 8 == 7 && Place1 % 8 != PlaceS % 8){
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
    var ConsX = Cons;
    var ConsY = Cons;
    if(Place % 8 == 0){
      ConsX = Cons1;
    }
    else if(Place % 8 == 7){
      ConsX = Cons2;
    }
    if(Place / 8 == 0){
      ConsY = Cons3;
    }
    else if(Place / 8 == 7){
      ConsY = Cons4;
    }
    var ConsM = ConsX.FindAll(ConsY.Contains);

    List<string> ListN = new List<string>(){};
    foreach(char Copy in Global.List){
      ListN.Add(Copy.ToString());
    }
    ListN[Place] = Global.MyT.ToString();

    foreach(int i in ConsM){
      int PlaceS = Place;
      int Place1 = Place + i;
      var PutO = new List<int>(){};

      if(Global.List[Place1] == Global.YoT){
        while(true){
          if(Global.List[Place1] == '0'){
            break;
          }
          else if(Place1 % 8 == 0 || Place1 % 8 == 7 && Place1 % 8 != PlaceS % 8){
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
    File.Write(Global.ServerP, String.Join("",ListN.ToArray()));
  }
}

//ファイル
class File{

  //読み込み
  public static string Read(string File){
    FileStream fs = new FileStream(File, FileMode.Open, FileAccess.ReadWrite);
    StreamReader sr = new StreamReader(fs);
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
