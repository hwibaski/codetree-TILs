n, t = map(int, input().split())
nums = list(map(int, input().split()))

ans = 0
cnt = 0
for i in range(n):
    if i < t:
        continue
    if i > 0 and nums[i] > t and nums[i] > nums[i - 1]:
        cnt += 1
    else:
        cnt = 1
    ans = max(cnt, ans)

print(ans)