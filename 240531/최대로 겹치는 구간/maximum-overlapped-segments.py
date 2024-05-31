n = int(input())
arr = [tuple(map(int, input().split())) for _ in range(n)]
block = [0] * 200

for (s, e) in arr:
    for i in range(s, e):
        block[i] += 1

print(max(block))