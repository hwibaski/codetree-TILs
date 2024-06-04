OFFSET = 1000
A, B, M = [tuple(map(int, input().split())) for _ in range(3)]
checked = [[0 for j in range(1000 + OFFSET)] for i in range(1000 + OFFSET)]


# A 칠하기
for col in range(A[0], A[2]):
    for row in range(A[1], A[3]):
        checked[row][col] = 1
        
# B 칠하기
for col in range(B[0], B[2]):
    for row in range(B[1], B[3]):
        checked[row][col] = 2

# M 칠하기
for col in range(M[0], M[2]):
    for row in range(M[1], M[3]):
        checked[row][col] = 3

cnt = 0
# 남아있는 A, B 집계
for row in checked:
    for el in row:
        if el == 1 or el == 2:
            cnt +=1

print(cnt)