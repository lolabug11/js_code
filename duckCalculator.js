let baseCol = 6
let baseRow = 10
let screenWidth = 160
let screenHeight = 120
let duckPositionX = 8
let duckPositionY = 8
let numberOfDucks = 70
let duckY = duckPositionY
let duckX = duckPositionX
let n = Math.ceil(Math.log2(numberOfDucks/70))
let scale = 2**-2
let cellHight = scale * 16
let cellWidth = scale * 16

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
