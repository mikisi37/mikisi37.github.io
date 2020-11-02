#include <stdio.h>
#include <string.h>
#include <cstdlib>

main()
{
  char a[] = "C:\\MinGW\\bin\\g++.exe -o ";
  char s[] = " ";
  char e[] = ".cpp";
  printf("Do you want the file name to be the same?[y/n]");
  int f = getchar();
  if(f == 'y')
  {
    printf("Please specify the file name  ");
    char f[256];
    scanf("%s",f);
    strcat(a,f);
    strcat(a,s);
    strcat(a,f);
    strcat(a,e);
    FILE *pipe = popen(a, "r");
    pclose(pipe);
  }
  else if(f == 'n')
  {
    printf("Please specify the file name  ");
    char f[256];
    scanf("%s",f);
    printf("Decide on a name for the exe  ");
    char fe[256];
    scanf("%s",fe);
    strcat(a,fe);
    strcat(a,s);
    strcat(a,f);
    strcat(a,e);
    FILE *pipe = popen(a, "r");
    pclose(pipe);
  }
  else if(f == 'f')
  {
    exit(0);
  }
  printf("\n");
  main();
}
