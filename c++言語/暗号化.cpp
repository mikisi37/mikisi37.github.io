#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "encryption.h"

encrypt()
{
  int k = 16;
  char p[256];
  char pt[256];
  char ptt[256];
  scanf("%s",p);
  for(int i = 0;p[i] != '\0';i++)
  {
    for(int ei = 0;ei <= 61;ei++)
    {
      if(p[i] == encryption[ei])
      {
        ei += k;
        while(ei > 61)
        {
          ei -= 62;
        }
        p[i] = encryption[ei];
        if(ei < 10)
        {
          snprintf(ptt,256,"0%d",ei);
        }
        else
        {
          snprintf(ptt,256,"%d",ei);
        }
        strcat(pt,ptt);
      }
    }
  }
  printf("%s\n",p);
  printf("%s\n",pt);
  encrypt();
}
main()
{
  encrypt();
}