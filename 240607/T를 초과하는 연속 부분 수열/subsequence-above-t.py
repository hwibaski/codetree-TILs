n, t = map(int, input().split())
nums = list(map(int, input().split()))

ans = 0
cnt = 0

if n == 1 and nums[0] > t:
    ans += 1

for i in range(n):
    if i > 0 and nums[i] > t and nums[i] > nums[i - 1]:
        cnt += 1
    elif nums[i] > t:
        cnt += 1
    else:
        cnt = 0
    ans = max(cnt, ans)

print(ans)


# ans, cnt = 0, 0
# for i in range(n):
#     # Case 1
#     if arr[i] > t:
#         cnt += 1
#     # Case 2
#     else:
#         cnt = 0
    
#     ans = max(ans, cnt)

# print(ans)