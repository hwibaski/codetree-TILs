blocks = []

class Block:
    def __init__(self,pos):
        self.pos = pos
        self.color = "none"

    def setBlackColor(self):
        self.color = "black"

    def setWhiteColor(self):
        self.color = "white"

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
		cur -= distance
		cur += 1
	else:
		for pos in range(cur, cur + distance):
			blocks[pos].setBlackColor()
		cur += distance
		cur -= 1

# 색깔 집계
black = 0
white = 0

for block in blocks:
	if block.color == "black":
		black += 1
	elif block.color == "white":
		white +=1

print(white, black)