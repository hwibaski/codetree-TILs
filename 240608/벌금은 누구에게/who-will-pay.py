N, M, K = map(int, input().split())

# N: 학생 수
# 1 ~ N 까지 번호 있음
# 한 학생이 K 번 이상 벌칙 받으면 벌금 내야됨
# M : 벌칙에 걸린 학생 번호 주어짐
students = [0] * (N + 1)

ans = -1
for _ in range(M):
    벌칙걸린_학생번호 = int(input())
    students[벌칙걸린_학생번호] += 1
    for el in students:
        if el == K:
            ans = el - 1
            break
    if ans != -1:
        break
    
print(ans)