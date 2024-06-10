# N명의 개발자
# T번에 걸쳐 t 초에 x개발자가 y개발자와 악수를 나눈 정황이 주어짐
# 1명의 개발자가 처음에 이 전염병을 옮김
# 개발자가 이 병에 감염된 후에는 정확히 K 번의 악수 동안만 전염병으 옮기고, 그 이후부터는 전연병에 걸려 있지만 새로 옮기지는 않는다.
# 개발자들의 악수에 대한 정보와 처음 전염병에 걸려 있는 개발자의 번호 P가 주어졌을 때, 모든 악수를 진행한 후 최종 누가 전염병에 걸리게 되었는지 알아내는 프로그램 작성

# 전염된 사람끼리 만나도 전염

# N: 개발자 수
# K: 전염병 전이 가능 제한 악수 횟수
# P : 처음 전염병 걸린 개발자 번호
# T : 입력 횟수

# t : 초 (시점, 기간 X)
# a : 개발자 번호1
# b : 개발자 번호2

N, K, P, T = map(int, input().split())
SECOND = 250
records = [[0 for _ in range(SECOND)] for _ in range(N+1)]

for _ in range(T):
    t, x, y = map(int, input().split())

    a = records[x]
    b = records[y]

    if x == P or y == P:
        a[t] = 1
        b[t] = 1
    

ans = [0] * (N + 1)
for i in range(SECOND):
    for j in range(0, N + 1):
        if j == 0:
            continue
        if K == 0:
            break
        if j == P:
            ans[j] = 1
            continue
        if j != P and records[j][i] == 1:
            ans[j] = 1
            K -= 1

for i in range(1, len(ans)):
    print(ans[i], end="")