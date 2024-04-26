from collections import deque


queue = deque()

answer = []
n = int(input())


for i in range(n):
    value = input()

    if "push" in value:
        split_value = value.split(" ")
        queue.append(int(split_value[1]))
    if value == "front" and queue:
        answer.append(queue[0])
    elif value == "front" and not queue:
        answer.append(-1)
    if value == "back" and queue:
        answer.append(queue[-1])
    elif value == "back" and not queue:
        answer.append(-1)
    if value == "size":
        answer.append(len(queue))
    if value == "empty" and len(queue) == 0:
        answer.append(1)
    elif value == "empty" and len(queue) != 0:
        answer.append(0)
    if value == "pop" and queue:
        answer.append(queue.popleft())
    elif value == "pop" and not queue:
        answer.append(-1)

for i in answer:
    print(i)