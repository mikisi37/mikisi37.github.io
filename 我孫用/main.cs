using System;
using System.Windows.Forms;

class Program{
  [STAThread]
  static void Main(){
    Application.Run(new Form1());
  }
}

class Form1 : Form{
  public Form1(){
    this.Text = "Hello";
  }
}
