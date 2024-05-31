n, k = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(k)]
block = [0] * n

for el in arr:
    start = el[0]
    end = el[1]
    
    for i in range(start-1, end):
        block[i] += 1


print(max(block))