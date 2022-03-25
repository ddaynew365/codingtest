# 이진탐색 원하는 값에 가장 가까운 큰수
def getMaxBarrier(initialEnergy, th):
    # Write your code here
    lo = 1
    hi = max(initialEnergy)
    while lo <= hi:
        mid = (hi + lo) // 2
        resultEnergy = list(map(lambda x: x- mid, initialEnergy))
        total = sum([x for x in resultEnergy if x > 0])
        if total > th:
            lo = mid + 1
        elif total < th:
            hi = mid - 1
        else:
            return mid
    return hi