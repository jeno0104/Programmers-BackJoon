n, m = map(int, input().split())

box = []

for i in range(1, n + 1):
    box.append(i)

for i in range(m):
    a, b = map(int, input().split())
    new_box = box[a - 1:b]
    new_box.reverse()

    for j in range(a, b + 1):
        box[j - 1] = new_box[j - a]    

for i in box:
    print(i, end=" ")