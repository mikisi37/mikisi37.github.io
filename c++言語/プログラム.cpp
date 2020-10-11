#include <stdio.h>
#include <conio.h>
#include <windows.h>
#include "pro.h"

main()
{
  int i = 0;
  int buf;
  printf("\nC:\\user\\main>\n");
  for(;i <= 2056;)
  {
    while(1)
    {
      if(kbhit() & i < 2057)
      {
        buf = getch();
        printf("%c",p1[i]);
        i++;
        if(buf != '|')
        {
          break;
        }
      }
    }
  }
}
