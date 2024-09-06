SELECT A.ANIMAL_ID, A.NAME
FROM ANIMAL_OUTS A
LEFT JOIN ANIMAL_INS B
ON A.ANIMAL_ID = B.ANIMAL_ID
WHERE B.ANIMAL_ID IS NULL

# INNER JOIN은 교집합을 구하는 것
# 유실된 데이터를 확인할 수 없음 
# -> LEFT JOIN을 해야함
# LEFT 조인은 왼쪽은 그대로 있고, 오른쪽이 왼쪽으로 들어간다.