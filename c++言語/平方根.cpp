#include <math.h>
#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#include <time.h>

main()
{
  printf("Please enter a number: ");
  char kk[256];
  scanf("%s",kk);
  double k = atof(kk);
  double a = sqrt(k);
  printf("square  %lf = %lf\n", k, a);
  if(kk != "f")
  {
    main();
  }
}
