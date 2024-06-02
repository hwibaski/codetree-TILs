n = int(input())
block = [[0 for j in range(100)] for i in range(100)]

for _ in range(n):
    x1, y1, x2, y2 = tuple(map(int, input().split()))

    for row in range(x1, x2):
        for col in range(y1, y2):
            block[row][col] = 1

cnt = 0
for row in block:
    for el in row:
        if el >= 1:
            cnt +=1

print(cnt)