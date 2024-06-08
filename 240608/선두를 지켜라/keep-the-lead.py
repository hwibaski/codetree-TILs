n, m = map(int, input().split())

move = [tuple(map(int, input().split())) for _ in range(n + m)]
a_records = [0] * 1000
b_records = [0] * 1000

# a의 진행
time_a = 1
for i in range(n):
    velocity, time = move[i]
    for t in range(time):
        a_records[time_a] = a_records[time_a - 1] + velocity
        time_a += 1

# print(a_records)

# b의 진행
time_b = 1
for i in range(n, n + m):
    velocity, time = move[i]
    for t in range(time):
        b_records[time_b] = b_records[time_b - 1] + velocity
        time_b += 1

# print(b_records)

cnt = 0
first = None
for i in range(n + m):
    if a_records[i] > b_records[i]:
        if first != 'a':
            cnt += 1
        first = 'a'
    elif a_records[i] < b_records[i]:
        if first != 'b':
            cnt += 1
        first = 'b'

print(cnt)