def solution(s):
    stack = []
    for str in s:
        if stack and stack[-1] == str:
            stack.pop()
        else:
            stack.append(str)
    
    if stack:
        return 0
    else:
        return 1
        