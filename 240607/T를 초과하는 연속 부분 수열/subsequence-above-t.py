n, t = map(int, input().split())
nums = list(map(int, input().split()))

ans = 0
cnt = 0
for i in range(n):
    # if nums[i] < t:
    #     continue
    if i > 0 and nums[i] > t and nums[i] > nums[i - 1]:
        cnt += 1
    else:
        cnt = 0
    # print(i , nums[i], cnt, ans)
    ans = max(cnt, ans)

print(ans)