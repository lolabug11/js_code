import math as m

def function(aaa):
    result = 1
    while aaa > 1:
        result = result * aaa
        aaa -= 1
    return result
def sum_of_natural_numbers(n):
    result = (n * (n + 1)) / 2
    return result
def Euclidean_distance(x1, y1, x2, y2):
    distance = m.sqrt((x1-x2)**2 + (y1-y2)**2)
    return distance
# print(function(200))
# print(sum_of_natural_numbers(1000000000000000000000000))
print(Euclidean_distance(1, 3, 4, 6))