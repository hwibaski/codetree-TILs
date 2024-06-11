n = int(input())
dx, dy = [1, -1, 0, 0], [0, 0, -1, 1]
direction_map = dict({"E": 0, "W": 1, "S": 2, "N": 3})
x, y = 0, 0

for _ in range(n):
    direction, distance = input().split()
    for _ in range(int(distance)):
        idx = direction_map[direction]
        x, y = x + dx[idx],y + dy[idx]

print(x, y)