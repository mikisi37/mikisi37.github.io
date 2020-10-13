#include <stdio.h>
#include <conio.h>
#include <windows.h>
#include "pro.h"

main()
{
  int i = 0;
  int buf;
  printf("Mikisi Programming [Version 1.0.0.0]\n");
  printf("(c) 2020 Mikisi Corporation. All rights reserved.\n");
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
