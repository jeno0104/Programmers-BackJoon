s = input()

string = s.split(" ")
result = 0
for i in range(len(string)):
    if string[i] == "":
        pass
    else:
        result += 1

print(result)
    