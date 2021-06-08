using System;
using System.IO;
using System.Text;
using System.Drawing;
using System.Windows.Forms;

public class Global{
  public static int SaveDate = 143532;

}

class Program{
  static void Main(){
    Application.Run(new Form1());
  }
}

class Form1 : Form{
  public Form1(){
    this.MinimumSize = new Size(636,659);
    this.Text = "リバーシ";
    this.DoubleBuffered = true;
    this.BackColor = Color.FromArgb(0x19,0x19,0x70);

    Timer timer = new Timer();
    timer.Interval = 33;
    timer.Tick += new EventHandler(Update);
    timer.Start();
  }

  void Update(object sender, EventArgs e){
    Invalidate();
  }

  protected override void OnPaint(PaintEventArgs e){
    int WinW = this.ClientSize.Width -20;
    int WinH = this.ClientSize.Height -20;
    int FieldS;
    int GapW = 0;
    int GapH = 0;
    int RoundG;
    int Count = 0;
    int CountB = 0;
    int CountW = 0;
    var Date = File.Read();

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

    RoundG = FieldS * 10 /75;

    for(int y = 0; y < 8; y++){
      for(int x = 0; x < 8; x++){
        int Sx = x *FieldS +GapW +10;
        int Sy = y *FieldS +GapH +10;
        char Status = Date[x +y *8];

        Rectangle rect = new Rectangle(Sx, Sy, FieldS, FieldS);
        Rectangle round = new Rectangle(Sx +RoundG, Sy +RoundG, FieldS -RoundG *2, FieldS -RoundG *2);
        Console.WriteLine("{0},{1},{2},{3}",Sx,Sy,FieldS,FieldS -20);
        g.DrawRectangle(penB,rect);
        g.FillRectangle(brushF,rect);

        if(Status == '1'){
          g.FillEllipse(brushT,Sx +RoundG *2, Sy +RoundG *2, FieldS -RoundG *4, FieldS -RoundG *4);
        }
        else if(Status == '2'){
          g.FillEllipse(brushB,round);
          CountB++;
        }
        else if(Status == '3'){
          g.FillEllipse(brushW,round);
          CountW++;
        }
      }
    }

    Count = CountB + CountW;
    Font font = new Font("Times New Roman", RoundG *3 /2, FontStyle.Regular);
    string text = string.Format("石：総数{0}　黒{1},　白{2}",Count,CountB,CountW);
    g.DrawString(text,font,brushW, 0, 0);


    brushF.Dispose();
    brushT.Dispose();
    brushW.Dispose();
    brushB.Dispose();
    penB.Dispose();

  }
}

class File{

  public static string Read(){
    StreamReader sr = new StreamReader("test.txt", Encoding.GetEncoding("Shift_JIS"));
    string text = sr.ReadToEnd();
    sr.Close();
    return text;
  }

  public static void Write(){
    Encoding sjisEnc = Encoding.GetEncoding("Shift_JIS");
    StreamWriter writer = new StreamWriter("test.txt", false, sjisEnc);
    writer.WriteLine(Global.SaveDate);
    writer.Close();
  }
}

//    Console.WriteLine();
