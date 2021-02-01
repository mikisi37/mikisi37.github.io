import time
def learn(x):
    w1 = 1
    w2 = -1
    h = 0
    up = 0.5
    while True:
        count = 0
        ave_error = 0
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
            ave_error += error
            learn_count += 1
            i += '＊' * learn_count *3 + '・' * (len(x) - learn_count) *3
            print('\r[{0}]'.format(i),end='')
            time.sleep(0.5)
        print('\nerror ======> ['+str(abs(ave_error // len(x)))+']')
        if count == len(x):
            return w1,w2,h


demo = [[0,0,0],
        [1,0,0],
        [0,1,0],
        [1,1,1]]
print(learn(demo))

#https://repl.it/languages/python3?v2=1
