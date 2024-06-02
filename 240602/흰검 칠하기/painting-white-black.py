blocks = []

class Block:
    def __init__(self,pos):
        self.pos = pos
        self.color = "none"
        self.white_cnt = 0
        self.black_cnt = 0

    def setBlackColor(self):
        if self.color == 'none':
            self.color = "black"
            self.black_cnt += 1
        elif self.color == 'gray':
            self.color = "gray"
        elif self.black_cnt >= 1 and self.white_cnt >= 2:
            self.color = 'gray'
        else:
            self.color = "black"
            self.black_cnt += 1

    def setWhiteColor(self):
        if self.color == 'none':
            self.color = "white"
            self.white_cnt += 1
        elif self.color == 'gray':
            self.color = 'gray'
        elif self.black_cnt >= 2 and self.white_cnt >= 1:
            self.color = 'gray'		
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

	# if j == 4: break 
	# print("--------------")
	# print('cur:',cur)
	# for b in blocks:
	# 	print(b.pos, b.color)
	

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

# for b in blocks:
# 	print(b.pos, b.color)



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