n = int(input())
OFFSET = 100

checked = [[0 for _ in range(100 + OFFSET)] for _ in range(100 + OFFSET)]

for _ in range(n):
    x, y = map(int, input().split())
    for i in range(x, x+8):
        for j in range(y, y+8):
            checked[i][j] = 1

answer = 0
for row in checked:
    for el in row:
        if el == 1:
            answer += 1

print(answer)