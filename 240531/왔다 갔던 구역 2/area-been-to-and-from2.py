n = int(input())
cmds = [tuple(input().split()) for _ in range(n)]
block = [0] * 2000


cur = len(block) // 2
for cmd in cmds:
    power = int(cmd[0])
    direction = cmd[1]

    if direction == 'R':
        for i in range(cur, cur+power):
            block[i] += 1
        cur += power
    if direction == 'L':
        for i in range(cur, cur-power, -1):
            block[i] += 1
        cur -= power

answer = 0
for el in block:
    if el >= 2:
        answer += 1

print(answer)