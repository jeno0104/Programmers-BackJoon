def solution(s):
    answer = ""
    num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    num_en = ""
    for i in range(len(s)):
        if s[i].isnumeric():
            answer += str(s[i])
        else:
            num_en += str(s[i])
            if num_en in num:
                index_num = num.index(num_en)
                answer += str(index_num)
                num_en = ""
                
            
    
    return int(answer)