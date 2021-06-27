using System;
using System.Drawing;
using System.Windows.Forms;

class Program{
  static void Main(){
    Application.Run(new Form1());
  }
}

class Form1 : Form{
  PictureBox pictureBox1 = new PictureBox();

  public Form1(){
    this.StartPosition = FormStartPosition.CenterScreen;
    this.FormBorderStyle = FormBorderStyle.None;
    this.TransparencyKey = this.BackColor;
    this.ShowInTaskbar = false;
    this.TopMost = true;
    this.Width = 640;
    this.Height = 500;

    Controls.Add(pictureBox1);

    this.pictureBox1.Dock = DockStyle.Fill;
    Bitmap bm = new Bitmap("main.gif");
    this.pictureBox1.Image = bm;
  }
}
