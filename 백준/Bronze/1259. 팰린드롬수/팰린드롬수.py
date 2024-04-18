
n = 1

while True:
    n = input()
    if n == "0":
        break
    new_n = ""

    if len(n) % 2 == 0:
        new_n = [n[x] for x in range(len(n) // 2, len(n))]
        n = [n[x] for x in range(0, len(n) // 2)]
        new_n.reverse()
    else:
        new_n = new_n = [n[x] for x in range((len(n) // 2) + 1, len(n))]
        n = [n[x] for x in range(0, len(n) // 2)]
        new_n.reverse()
    if n == new_n:
        print("yes")
    else:
        print("no")