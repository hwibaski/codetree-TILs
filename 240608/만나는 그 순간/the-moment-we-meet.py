N, M = map(int, input().split())

a_checked = [0] * 1_000_000
b_checked = [0] * 1_000_000

for _ in range(N):
    direction, d = input().split()
    distance = int(d)

    cur = 0
    if direction == 'R':
        for second in range(distance):
            cur += 1
            a_checked[second] = cur
    else:
        for second in range(distance):
            cur -= 1
            a_checked[second] = cur

for _ in range(M):
    direction, d = input().split()
    distance = int(d)

    cur = 0
    if direction == 'R':
        for second in range(distance):
            cur += 1
            a_checked[second] = cur
    else:
        for second in range(distance):
            cur -= 1
            a_checked[second] = cur

answer = -1
for s in range(1_000_000):
    if a_checked[s] == b_checked[s]:
        answer = s
        break

print(answer)