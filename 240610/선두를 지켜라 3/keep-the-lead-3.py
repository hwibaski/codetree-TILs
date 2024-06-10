n, m = map(int, input().split())

# 선두가 바뀌는 지점을 찾아라
a_rec = [0] * 1_000_000
b_rec = [0] * 1_000_000

# A
time_a = 1
for _ in range(n):
    v, t = map(int, input().split())
    for _ in range(t):
        a_rec[time_a] = a_rec[time_a - 1] + v
        time_a += 1

# B
time_b = 1
for _ in range(m):
    v, t = map(int, input().split())
    for _ in range(t):
        b_rec[time_b] = b_rec[time_b - 1] + v
        time_b += 1

# print(a_rec[:20])
# print(b_rec[:20])

# print(time_a)
# print(time_b)

r = [1]
for t in range(1, time_a):
    if a_rec[t] > b_rec[t]:
        r.append(-1)
        print(-1)
    elif a_rec[t] < b_rec[t]:
        r.append(0)
        print(0)
    else:
        r.append(1)
        print(1)

cnt = 0
for i in range(1, len(r)):
    if r[i] != r[i-1]:
        cnt += 1

print(cnt)