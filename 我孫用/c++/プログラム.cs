using System;
using System.IO;
using System.Linq;
using System.Text;
using System.Collections.Generic;

class MainClass{
  static void Main(){
    int i = 0;
    string buf = "";

    StreamReader sr = new StreamReader("pro.txt", Encoding.GetEncoding("UTF-8"));
    string line = sr.ReadToEnd();

    print("Mikisi Programming [Version 1.0.0.0]\n");
    print("(c) 2020 Mikisi Corporation. All rights reserved.\n");
    print("\nC:\\user\\main>\n");

    for(;i <= 2056;){
      while(true){
        Console.ReadKey(true);
        if(i < 2057){
          /*if(line[i] == '\\' && line[i+1] == 'n'){
            printf();
            i++;
          }
          else{*/
            Console.Write("{0}", line[i]);
          //}
          i++;

          if(buf != "|"){
            break;
          }
        }
      }
    }
  }

  static void print(string a){
    Console.Write(a);
  }
  static void printf(){
    Console.WriteLine();
  }
}
