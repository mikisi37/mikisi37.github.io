using System;
using System.Threading;
using System.Collections.Generic;

class MainClass{
  static void Main(){
    List<int> mode = new List<int>(){49,50,51,52};
    Random R1 = new System.Random();

    Thread.Sleep(10);
    print("Which process do you want to do? [1/2/3/4]");
    int which = Console.Read();

    if(mode.Contains(which)){
      Thread.Sleep(100);
      print("Do you want to start processing? [y/n]");
      Console.ReadLine();
      int yn = Console.Read();

      if(yn == 121){

        //２進数処理
        if(which == 49){
          int r;

          for(int i = 0;i < 1000;i++)
          {
            for(int ii = 0;ii < 200;ii++)
            {
              r = R1.Next(0,2);
              printf(r);
            }
            Thread.Sleep(10);
          }
        }

        //進行処理
        else if(which == 50){
          int r;
          for(int i = 0;i < 50;i++){
            print("\nProgress Now ");
            int ii = 0;
            while(ii < 20){
              r = R1.Next(0,9);
              if(r == 1){
                print("-");
                ii++;
              }
              Thread.Sleep(10);
            }
            Thread.Sleep(10);
          }
        }

        //回転処理
        else if(which == 51){
          int r;
          for(int i = 0;i < 50;i++){
            print("\nProgress Now .......");
            List<string> srt = new List<string>(){"-","\\","|","/","-","\\","|","/"};
            for(int ii = 0;ii < 8;ii++){
              r = R1.Next(0,21) + 1;
              Console.Write("\rProgress Now .......{0}",srt[ii]);
              Thread.Sleep(r*10);
            }
          }
        }

        //数字処理
        else if (which == 52){
          int r;
          for(int i = 0;i < 50;i++){
            print("\nProgress Now .......");
            for(int ii = 0;ii < 101;ii++){
              Console.Write("\rProgress Now .......{0}%",ii);
              r = R1.Next(0,4)+ 1;
              Thread.Sleep(r*5);
            }
          }
        }

      }
      else if(yn == 110){

      }
    }
  }

  static void print(string a){
    Console.Write(a);
  }
  static void printf(int a){
    Console.Write(a);
  }
}
