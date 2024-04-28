import sys

input = sys.stdin.readline
n = int(input())
a, b, c = map(int, input().split())

count = 0

if a - n >= 0:
    count += n 
else:
    count += a 
if b - n >= 0:
    count += n 
else:
    count += b
if c - n >= 0:
    count += n 
else:
    count += c 
    
print(count)