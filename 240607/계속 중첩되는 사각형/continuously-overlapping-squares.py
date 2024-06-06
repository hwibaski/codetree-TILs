n = int(input())
OFFSET = 100
checked = [[0 for _ in range(100 + OFFSET)] for _ in range(100 + OFFSET)]

for turn in range(n):
    x1, y1, x2, y2 = map(int, input().split())
    
    # 빨간색
    if turn % 2 == 0:
        for x in range(x1 + OFFSET, x2 + OFFSET):
            for y in range(y1 + OFFSET, y2 + OFFSET):
                checked[x][y] = 1
                
    # 파란색
    else:
        for x in range(x1 + OFFSET, x2 + OFFSET):
            for y in range(y1 + OFFSET, y2 + OFFSET):
                checked[x][y] = 2

answer = 0
for line in checked:
    for el in line:
        if el == 2:
            answer += 1

print(answer)