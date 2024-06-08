n, m = map(int, input().split())

move = [tuple(map(int, input().split())) for _ in range(n + m)]
a_records = [0] * (1_000_000 + 1)
b_records = [0] * (1_000_000 + 1)

# a의 진행
time_a = 1
for i in range(n):
    velocity, time = move[i]
    for _ in range(time):
        a_records[time_a] = a_records[time_a - 1] + velocity
        time_a += 1

# b의 진행
time_b = 1
for i in range(n, n+m):
    velocity, time = move[i]
    for _ in range(time):
        b_records[time_b] = b_records[time_b - 1] + velocity
        time_b += 1


cnt = 0
first = 0
for i in range(1, time_a):
    if a_records[i] > b_records[i]:
        if first == 2:
            cnt += 1
        first = 1
    elif a_records[i] < b_records[i]:
        if first == 1:
            cnt += 1
        first = 2

print(cnt)