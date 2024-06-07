n = int(input())
nums = [int(input()) for _ in range(n)]

ans = 0
cnt = 0
for i in range(n):
	if i > 0 and nums[i] > nums[i - 1]:
		cnt += 1
	else:
		cnt = 1
	ans = max(cnt, ans)

print(ans)