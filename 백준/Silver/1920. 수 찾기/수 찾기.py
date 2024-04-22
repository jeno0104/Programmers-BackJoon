n = int(input())
number_one = set(map(int, input().split()))

m = int(input())
number_two = list(map(int, input().split()))


for num_two in number_two:
    if num_two in number_one:
        print(1)
    else:
        print(0)