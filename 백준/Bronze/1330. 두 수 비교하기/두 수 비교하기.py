a, b = map(int, input().split())

answer = ""

if a > b:
    print(">")
elif a < b:
    print("<")
else:
    print("==")