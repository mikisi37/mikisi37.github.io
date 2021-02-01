import time
from random import randint

def learn(x):
    w1 = randint(-10,10)
    w2 = randint(-10,10)
    h = randint(-10,10)
    up = 0.5
    print('Start [w1,w2,h] == [{0},{1},{2}]'.format(w1,w2,h))
    while True:
        count = 0
        learn_count = 0
        for list in x:
            i = ''
            result = w1 *list[0] + w2*list[1] - h
            step = 1.0 *(result>=0.0)
            error = list[2] - step
            w1 += list[0] *error *up
            w2 += list[1] *error *up
            h -= error *up
            if error == 0:
                count += 1
            learn_count += 1
            i += '＊' * learn_count *3 + '・' * (len(x) - learn_count) *3
            print('\r[{0}]'.format(i),end='')
            time.sleep(0.2)
        print('\nProbability ======> ['+str(abs(count / len(x) *100))+'%]')
        if count == len(x):
            return w1,w2,h


demo = [[0,0,0],
        [1,0,0],
        [0,1,0],
        [1,1,1]]
print(learn(demo))

#https://repl.it/languages/python3?v2=1
