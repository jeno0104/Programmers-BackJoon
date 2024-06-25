def solution(s):
    stack = []
    
    s = list(s)
    count = 0
    flag = False
    for i in range(len(s)):
        for s_str in s:
            if s_str == "[" or s_str == "{" or s_str == "(":
                stack.append(s_str)
                flag = True
            elif s_str == "]" and len(stack) != 0 and stack[-1] == "[":
                stack.pop()
            elif s_str == "}" and len(stack) != 0 and stack[-1] == "{":
                stack.pop() 
            elif s_str == ")" and len(stack) != 0 and stack[-1] == "(":
                stack.pop()
        if flag and len(stack) == 0:
            count += 1
        s_pop_value = s.pop(0)
        s.append(s_pop_value)
        stack = []
    return count
        
