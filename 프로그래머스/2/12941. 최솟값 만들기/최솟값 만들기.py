def solution(A, B):
    A.sort()  # A를 오름차순으로 정렬
    B.sort(reverse=True)  # B를 내림차순으로 정렬
    answer = 0
    
    for a, b in zip(A, B):
        answer += a * b
        
    return answer

# 예시 테스트
print(solution([1, 4, 2], [5, 4, 4]))  # 출력: 29
print(solution([1, 2], [3, 4]))  # 출력: 10
