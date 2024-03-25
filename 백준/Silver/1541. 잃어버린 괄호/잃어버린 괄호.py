s = input()
numbers = []
strings = []
add_number = ""

for number in s:
    if number.isnumeric():
        add_number += number
    else:
        numbers.append(int(add_number))
        add_number = ""
        strings.append(number)
numbers.append(int(add_number))


for i in range(1, len(numbers)):
    if strings[i - 1] == "-":
        numbers[i] = numbers[i] * -1

answer = 0
flag = False
top_value = 0

for i in range(len(numbers)):
    if not flag:
        if numbers[i] > 0:
            answer += numbers[i]
        else:
            flag = True
            answer += numbers[i]
    else:
        if numbers[i] > 0:
            answer -= numbers[i]
        else:
            answer += numbers[i]
print(answer)    