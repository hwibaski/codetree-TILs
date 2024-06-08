# 1차선 직선 위
# 1초에 한 칸씩 좌우로만 이동
# 로봇 A, B
# A가 움직이는 횟수 = n
# b가 움직이는 횟수 = m
# 로봇 A, B는 처음에 같은 지점에서 움직이며, 이는 횟수에 포함 X

# 로봇 A와 B가 바로 직전에는 다른 위치에 있다가!, 그 다음 번에 같은 위치에 오게 되는 경우

# 각 로봇의 초당 위치를 기록
# 위치가 같은 곳을 찾는다.
# 같은 곳 바로 직전에 값이 다른지 확인

n, m = map(int, input().split())
a_rec, b_rec = [0] * 30, [0] * 30

# A
time_a = 0
a_pos = 0
for _ in range(n):
    dis, direction = input().split()
    if direction == 'R':
        for _ in range(int(dis)):
            a_rec[time_a] = a_pos
            a_pos += 1
            time_a += 1
    else:
        for _ in range(int(dis)):
            a_rec[time_a] = a_pos
            a_pos -= 1
            time_a += 1
    
a_rec[time_a] = a_pos
time_a += 1      


# B
time_b = 0
b_pos = 0
for _ in range(m):
    dis, direction = input().split()
    if direction == 'R':
        for _ in range(int(dis)):
            b_rec[time_b] = b_pos
            b_pos += 1
            time_b += 1
    else:
        for _ in range(int(dis)):
            b_rec[time_b] = b_pos
            b_pos -= 1
            time_b += 1

b_rec[time_b] = b_pos


if time_a < time_b:
    for _ in range(time_b - time_a):
        a_rec[time_a] = a_pos
        time_a += 1
elif time_a > time_b:
    for _ in range(time_a - time_b):
        b_rec[time_b] = b_pos
        time_b += 1


indexes = []
for t in range(time_a):
    if t > 0 and (a_rec[t] == b_rec[t]):
        indexes.append(t)

ans = 0
for i in indexes:
    if a_rec[i-1] != b_rec[i-1]:
        ans += 1

print(ans)