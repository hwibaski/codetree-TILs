OFFSET = 100
MAX_R = 200

n = int(input())
arr = [
    tuple(map(int, input().split()))
    for _ in range(n)
]
block = [0] * (MAX_R + 1)

for (s, e) in arr:
    s, e = s + OFFSET, e + OFFSET
    for i in range(s, e):
        block[i] += 1

print(max(block))