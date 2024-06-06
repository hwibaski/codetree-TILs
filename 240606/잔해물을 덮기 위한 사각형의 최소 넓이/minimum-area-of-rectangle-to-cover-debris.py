ax1, ay1, ax2, ay2 = map(int, input().split())
bx1, by1, bx2, by2 = map(int, input().split())

OFFSET = 1000
block = [[0 for _ in range(OFFSET + 1000)] for _ in range(OFFSET + 1000)]

# a 렌더링
for x in range(ax1, ax2):
    for y in range(ay1, ay2):
        block[x][y] = 1

# b 렌더링
for x in range(bx1, bx2):
    for y in range(by1, by2):
        block[x][y] = 2

# 면적 체크
x1 = 2000; y1 = 2000
x2 = 0; y2 = 0
for x, line in enumerate(block):
    for y, el in enumerate(line):
        if el == 1:
            x1 = min(x, x1)
            y1 = min(y, y1)
            x2 = max(x+1, x2)
            y2 = max(y+1, y2)

print((x2-x1) * (y2-y1))