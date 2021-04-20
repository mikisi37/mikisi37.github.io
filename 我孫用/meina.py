import sys

#自作
from error import error
from compile import compile
from assembly import assembly

#Symbol = ['(',')','[',']','{','}',"'",'"']

Option = {'-s': 0}

def save(data,name):
    f = open(name,'wb')
    f.write(data)
    f.close()

def openfile(option):
    try:
        f = open(option[1])
    except FileNotFoundError:
        error(option,1,2)
    data = f.read()
    f.close()
    return data

def main():
    option = sys.argv

    if len(option) == 1:
        error(option, 1, 1)

    elif len(option) > 2:
        data = openfile(option)
        data = compile(data)
        data = assembly(data)

        name = 'a.exe'
        option.pop(0)
        op = 0
        while len(option) > op:
            if option[op] in Option:
                if op +1 < len(option):
                    name = option[op +1] + '.exe'

            op += 1

        save(data,name)

    else:
        data = openfile(option)
        data = compile(data)
        data = assembly(data)


if __name__ == '__main__':
    main()
