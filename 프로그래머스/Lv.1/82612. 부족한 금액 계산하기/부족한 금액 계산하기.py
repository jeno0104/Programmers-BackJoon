def solution(price, money, count):
    answer = 0
    result = 0
    for i in range(1, count + 1):
        result = result + price * i
    if(result - money  > 0):
        return result - money
    else:
        return 0