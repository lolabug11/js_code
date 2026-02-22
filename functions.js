function factorial(input) {
    let result = 1
    while (input > 1) { 
        result = result * input 
        input -= 1
    }
    return result
}
function sumOfNaturalNumbers(n) {
    let result = 0
    result   = (n * (n+1))/2
    return result
}
function euclideanDistance(x1, y1, x2, y2) {
    let distance = 0
    distance = Math.sqrt((x1-x2)**2 + (y1-y2)**2)
    return distance
}
// console.log(factorial(170))
// console.log(sumOfNaturalNumbers(1000000000000000000000000))
console.log(euclideanDistance(1,3,4,6))