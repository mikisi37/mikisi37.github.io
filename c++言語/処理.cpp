#include <stdio.h>
#include <windows.h>
#include <time.h>

main ()
{
  Sleep(10);
  printf("Which process do you want to do? [1/2/3/4]");
  int which = getchar();

 if(which == '1' or which == '2' or which == '3' or which == '4')
 {
  Sleep(50);
  printf("Do you want to start processing? [y/n]");
 }

 srand((unsigned)time(NULL));

  while(which == '1' or which == '2' or which == '3' or which == '4')
  {
    int yn = getchar();

    if(yn == 'y')
    {

      //2進数処理
      if(which == '1')
      {
        int r;

        for(int i = 0;i < 1000;i++)
        {
          for(int i = 0;i < 200;i++)
          {
            r = rand() % 2 ;
            printf("%d",r);
          }
          Sleep(10);
        }
      }

      //進行処理
      else if(which == '2')
      {
        int r;
        for(int i = 0;i < 50;i++)
        {
          printf("\nProgress Now ");
          int ii = 0;
          while(ii < 20)
          {
            r = rand() % 8 ;
            if(r == 1)
            {
              printf("-");
              ii++;
            }
            Sleep(10);
          }
          Sleep(10);
        }
      }

      //回転処理
      else if(which == '3')
      {
        int r;
        for(int i = 0;i < 50;i++)
        {
          printf("\nProgress Now .......");
          char srt[8] = {'-','\\','|','/','-','\\','|','/'};
          for(int ii = 0;ii < 8;ii++)
          {
            r = rand() % 20 + 1;
            printf("\rProgress Now .......%c",srt[ii]);
            Sleep(r*10);
          }
        }
      }

      //数字処理
      else if (which == '4')
      {
        int r;
        for(int i = 0;i < 50;i++)
        {
          printf("\nProgress Now .......");
          for(int ii = 0;ii < 101;ii++)
          {
            printf("\rProgress Now .......%d%%",ii);
            r = rand() % 3 + 1;
            Sleep(r*5);
          }
        }
      }

      printf("\nProcessing is complete");
      which = 1;
    }
    else if(yn == 'n')
    {
      which = 1;
    }
    else if(which == '1' or which == '2' or which == '3' or which == '4')
    {
      printf("\rDo you want to start processing? [y/n]");
    }
  }
  Sleep(1000);
}
