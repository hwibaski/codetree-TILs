N, M, K = map(int, input().split())

# N: 학생 수
# 1 ~ N 까지 번호 있음
# 한 학생이 K 번 이상 벌칙 받으면 벌금 내야됨
# M : 벌칙에 걸린 학생 번호 주어짐
penalized_person = [int(input()) for _ in range(M)]
penalty_num = [0] * (N + 1)

ans = -1
for num in penalized_person:
    penalty_num[num] += 1

    if penalty_num[num] >= K:
        ans = num
        break
    
print(ans)