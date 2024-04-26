n = int(input())


stack = []
answer = []

for i in range(n):
    confirm = input()
    
    if "push" in confirm:
        split_value = confirm.split(" ")
        stack.append(int(split_value[1]))
    elif confirm == "top" and len(stack) != 0:
        answer.append(stack[-1])
    elif confirm == "top" and len(stack) == 0:
        answer.append(-1)
    elif confirm == "size":
        answer.append(len(stack))
    elif confirm == "empty" and len(stack) == 0:
        answer.append(1)
    elif confirm == "empty" and len(stack) != 0:
        answer.append(0)
    elif confirm == "pop" and len(stack) != 0:
        answer.append(stack.pop())
    elif confirm == "pop" and len(stack) == 0:
        answer.append(-1)

for i in answer:
    print(i)