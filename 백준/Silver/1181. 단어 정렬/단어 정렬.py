n = int(input())

words = []

for i in range(n):
    word = input()
    words.append(word)
words = list(set(words))
words.sort()
words.sort(key = lambda x:len(x))

for i in words:
    print(i)