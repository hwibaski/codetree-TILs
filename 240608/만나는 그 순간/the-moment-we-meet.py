N, M = map(int, input().split())

a_checked = [0] * 1_000_000
b_checked = [0] * 1_000_000

time_a = 1
for _ in range(N):
    d, t = tuple(input().split())
    for _ in range(int(t)):
        a_checked[time_a] = a_checked[time_a - 1] + (1 if d == 'R' else -1)
        time_a += 1
            

time_b = 1
for _ in range(M):
    d, t = tuple(input().split())
    for _ in range(int(t)):
        b_checked[time_b] = b_checked[time_b - 1] + (1 if d == 'R' else -1)
        time_b += 1
            
answer = -1
for s in range(1, 1_000_000):
    if a_checked[s] == b_checked[s]:
        answer = s
        break

print(answer)