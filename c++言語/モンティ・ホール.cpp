#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#include <time.h>

main()
{
  srand((unsigned)time(NULL));
  printf("Please specify the number of times: ");
  char kk[256];
  scanf("%s",kk);
  int k = atof(kk);
  int a = 0;
  int aa = 0;

  //not
  printf("");
  for(int i = 1;i <= k;i++)
  {
    int r = rand() % 3;
    int rr = rand() % 3;
    if(r == rr)
    {
      a += 1;
      Sleep(10);
    }
    printf("\rNow..... %d%%",(i * 100 + k -1) / k);
  }

  srand((unsigned)time(NULL));

  //yes
  printf("\n");
  for(int ii = 1;ii <= k;ii++)
  {
    int l = rand() % 3;
    int ll = rand() % 3;
    if(l != ll)
    {
      aa += 1;
      Sleep(8);
    }
    printf("\rNow..... %d%%",(ii * 100 + k -1) / k);
  }

  //not
  printf("\nProbability: %d%%\n",(a * 100 + k -1) / k);
  //yes
  printf("Probability: %d%%",(aa * 100 + k -1) / k);

  while(1)
  {
  }
}
