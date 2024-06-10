n, m = map(int, input().split())

# 선두가 바뀌는 지점을 찾아라
a_rec = [0] * 1000
b_rec = [0] * 1000

# A
time_a = 1
for _ in range(n):
    v, t = map(int, input().split())
    for _ in range(t):
        a_rec[time_a] += v
        time_a += 1

# B
time_b = 1
for _ in range(m):
    v, t = map(int, input().split())
    for _ in range(t):
        b_rec[time_b] += v
        time_b += 1

r = []
for t in range(time_a):
    if a_rec[t] > b_rec[t]:
        r.append(-1)
    elif a_rec[t] < b_rec[t]:
        r.append(0)
    else:
        r.append(1)
# print(r)

cnt = 0
for i in range(1, len(r)):
    if r[i] != r[i-1]:
        cnt += 1

print(cnt)