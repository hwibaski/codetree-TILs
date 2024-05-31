n = int(input())
lines = [tuple(map(int, input().split())) for _ in range(n)]
block = [0] * 100

for (x1, x2) in lines:
    for i in range(x1, x2+1):
        block[i] += 1
    # print(block)

print(max(block))