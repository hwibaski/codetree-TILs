blocks = []

class Block:
    def __init__(self,pos):
        self.pos = pos
        self.color = "none"
        self.white_cnt = 0
        self.black_cnt = 0

    def setBlackColor(self):
        if self.color == "none":
            self.color = "black"
            self.black_cnt += 1
        elif self.color == "gray":
            self.color = "gray"
        elif self.black_cnt >= 1 and self.white_cnt >= 2:
            self.color = "gray"
        else:
            self.color = "black"
            self.black_cnt += 1

    def setWhiteColor(self):
        if self.color == "none":
            self.color = "white"
            self.white_cnt += 1
        elif self.color == "gray":
            self.color = "gray"
        elif self.black_cnt >= 2 and self.white_cnt >= 1:
            self.color = "gray"
        else:
            self.color = "white"
            self.white_cnt += 1

for i in range(100000):
    blocks.append(Block(i))

n = int(input())
segments = []

cur = 100000 // 2
for j in range(n):
	distance, direction = tuple(input().split())
	distance = int(distance)

	if direction == 'L':
		for pos in range(cur, cur - distance, -1):
			blocks[pos].setWhiteColor()
        # cur 커서에 거리만큼 추가
		cur -= distance
        # 그러나 거리만큼 추가되면 칠해진 곳보다 한 칸 더 앞서거나 모자라거나 하게 된다.
        # cur: 0, R: 3인 경우
        # 0 1 2 3
        # B B B
        # cur -> 3이 되므로 칠해진 곳보다 한칸 앞선다. 따라서 R인 경우에는 한 칸 빼주고, L인 경우에는 한 칸 더해준다.
		cur += 1
	else:
		for pos in range(cur, cur + distance):
			blocks[pos].setBlackColor()
		cur += distance
		cur -= 1

# 색깔 집계
black = 0
white = 0
gray = 0

for block in blocks:
	if block.color == "black":
		black += 1
	elif block.color == "white":
		white +=1
	elif block.color == "gray":
		gray +=1

print(white, black, gray)