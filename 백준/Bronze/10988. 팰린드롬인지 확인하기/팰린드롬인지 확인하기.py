string = input()
first_string = ""
second_string = ""

if len(string) % 2 != 0:
    first_string = string[0:(len(string) // 2)]
    second_string = string[len(string)  // 2 + 1:len(string)]
    second_string = second_string[::-1]
else:
    first_string = string[0:len(string) // 2]
    second_string = string[(len(string) // 2):len(string)]

    second_string = second_string[::-1]

if first_string == second_string:
    print(1)
else:
    print(0)

    