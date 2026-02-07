let ducksPerCol = 6
let ducksPerRow = 10
let duckPositionX = 8
let duckPositionY = 8
let numberOfDucks = 70
// for (let i = 1; i < 71; i+=1) {
//     console.log(i)
// }
// for (let x = ducksPerCol; x > 0; x--) {
//     for (let y = ducksPerRow; y > 0; y--) {
//     console.log(y)
//     }
// }
let duckY = duckPositionY
let duckX = duckPositionX
for (let a = numberOfDucks; a > 0; a) {
    for (let y = ducksPerCol; y > 0; y--) {
        for (let x = ducksPerRow; x > 0; x--) {
            if (a > 0) {
                console.log("( " + duckX + " , " + duckY +" )")
                duckX += 16
                a-=1
            } else {
                break
            }

        }
    if (a > 0) {
        duckY += 16 
        duckX = duckPositionX
    } else {
        break
    }

}
}
