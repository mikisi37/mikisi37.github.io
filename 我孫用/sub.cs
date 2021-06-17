using System;
using System.IO;
using System.Drawing;
using System.Windows.Forms;

class Sub{
  public static void MakeA(){
    Application.Run(new Form2());
  }

  public static void StartU(){
    Directory.CreateDirectory(Global.Server + Global.Account);
    File.Write(Global.Server + Global.Account + @"\Server.txt", Global.Initial);
    File.Write(Global.Server + Global.Account + @"\Data.txt", "1");
  }

  public static void Online(){
    string[] Files = Directory.GetDirectories(Global.Server,"*");

    Global.OnlineP.Clear();

    foreach(string i in Files){
      if(File.Read(i + @"\Data.txt")[0] == '1'){
        Global.OnlineP.Add(i.Replace(Global.Server, ""));
      }
    }
  }
}

class Form2 : Form{
  Label label = new Label();
  TextBox textbox = new TextBox();
  Button button = new Button();

  public Form2(){
    this.StartPosition = FormStartPosition.CenterScreen;
    this.MinimumSize = new Size(500,300);
    this.MaximumSize = new Size(500,300);
    this.Icon = new System.Drawing.Icon("main.ico");
    this.Text = "アカウント作成";

    label.Text = "アカウント名を設定してください。";
    label.Font = new Font(label.Font.FontFamily, 25);
    label.Location = new Point(35, 30);
    label.AutoSize = true;
    this.Controls.Add(label);

    textbox.Font = new Font(label.Font.FontFamily, 25);
    textbox.Location = new Point(100, 110);
    textbox.Size = new Size(300,100);
    this.Controls.Add(textbox);

    button.Text = "OK";
    button.Font = new Font(label.Font.FontFamily, 25);
    button.Location = new Point(200, 190);
    button.AutoSize = true;
    button.Click += new EventHandler(button_Click);
    this.Controls.Add(button);
  }

  void button_Click(object sender,EventArgs e){
    if(textbox.Text != ""){
      File.Write("Account.txt", textbox.Text);
      Directory.CreateDirectory(Global.Server + textbox.Text);
      this.Close();
    }
  }
}
