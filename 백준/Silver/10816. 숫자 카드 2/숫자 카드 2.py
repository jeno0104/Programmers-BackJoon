from bisect import bisect_left, bisect_right 

n = int(input())
sangun = list(map(int, input().split()))
sangun.sort()
m = int(input())
target = list(map(int, input().split()))

answer = []
def find_number(sangun, target):
    left_number = bisect_left(sangun, target)
    right_number = bisect_right(sangun, target)

    return right_number - left_number
    

for number in target:
    result = find_number(sangun, number)
    print(result, end= " ")