using System;
using System.Drawing;
using System.Windows.Forms;

class Sub{
  public static void MakeA(){
    Application.Run(new Form2());
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
      File.Write("Account.txt",textbox.Text);
      this.Close();
    }
  }
}
