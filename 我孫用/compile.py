from error import error

def compile(data):
    simple = []
    output = []
    com = False
    com1 = False
    coma1 = False
    coma2 = False
    coms = ''
    count = 0

    while count < len(data):
        i = data[count]

        if i == "'" and not com1:
                com = not com
                simple.append(coms)
                coms = ''
                if not com:
                    count += 1
                    i = data[count]

        elif i == '"' and not com:
                com1 = not com1
                simple.append(coms)
                coms = ''
                if not com1:
                    count += 1
                    i = data[count]

        if i == '/' and data[count + 1] == '/':
            coma1 = True

        if i == '/' and data[count + 1] == '*':
            coma2 = True

        if i == '\n' and not com:
            if not com or not com1:
                simple.append(coms)
                coms = ''

        if not coma1 and not coma2:
            if com or i != '\n':
                coms += i

        if i == '\n':
            coma1 = False

        if i == '*' and data[count + 1] == '/':
            count += 1
            coma2 = False

        count += 1
    simple.append(coms)
    for i in simple:
        if i != '':
            output.append(i)

    print(output)
    return output
