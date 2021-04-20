ErrorCode = {1:'ファイルを指定してください',2:'ファイルが存在しません'}

def error(line,place,x):
    print(' '.join(line))

    count = ''
    i = 0
    while i < place:
        count += line[i] + ' '
        i += 1
    for i in range(len(count)):
        print(' ',end='')
    print('^')

    print(ErrorCode[x])
    sys.exit()
