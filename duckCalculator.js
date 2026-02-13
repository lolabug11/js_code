// requitement 1
// requirement 2
let requirement1 = 1
let requirement2 = 2
let requirement3 = true
let requirement4 = 'Hello ' + requirement1 + " World."
requirement1 += requirement2
if ( requirement1 == requirement1) {
    console.log("requirement")
} else if ( requirement1 != requirement1) { 
    game.showLongText("Hello " + requirement1 +".", DialogLayout.Top)
}
// actual code
let result = 0 
let ducksPerRow = 10
let ducksPerCol = 7
console.log(ducksPerCol)
console.log(ducksPerRow)
let operation = game.askForNumber('1 = +, 2 = -,            3 = *', 1)
if (operation < 1 || operation > 4) {
    game.reset()
}
if (operation == 1) {
    let number1 = game.askForNumber("What is the first number you want to add?")
    let number2 = game.askForNumber("What is the second number you want to add?")
    result = number1 + number2
} else if (operation == 2) {
    let number1 = game.askForNumber("What is the number you want to subtract from?")
    let number2 = game.askForNumber("What is the number you want to subtract?")
    result = number1 - number2
} else if (operation == 3) {
    let number1 = game.askForNumber("What is the first number you want to multiply?")
    let number2 = game.askForNumber("What is the second nuber you want to multiply?")
    result = number1 * number2
} else {
    game.showLongText("You have entered an input with out an operation assignded to it.", DialogLayout.Full)
    game.reset()
}
 
// let baseCol = 6
// let baseRow = 10
// let screenWidth = screen.width
// let screenHeight = screen.height
// let duckPositionX = 8
// let duckPositionY = 8
// let numberOfDucks = result
// let duckY = duckPositionY
// let duckX = duckPositionX
// for (let a = numberOfDucks; a > 0; a) {
//     for (let y = ducksPerCol; y > 0; y--) {
//         for (let x = ducksPerRow; x > 0; x--) {
//             if (a > 0) {
//                 console.log("(" + duckX + " , " + duckY + " )")
//             let duck = sprites.create(img`
//                 . . . . . . . . . . . . . . . .
//                 . . . . . . . . . . . . . . . .
//                 . . . . . . . . . b 5 5 b . . .
//                 . . . . . . b b b b b b . . . .
//                 . . . . . b b 5 5 5 5 5 b . . .
//                 . b b b b b 5 5 5 5 5 5 5 b . .
//                 . b d 5 b 5 5 5 5 5 5 5 5 b . .
//                 . . b 5 5 b 5 d 1 f 5 d 4 f . .
//                 . . b d 5 5 b 1 f f 5 4 4 c . .
//                 b b d b 5 5 5 d f b 4 4 4 4 b .
//                 b d d c d 5 5 b 5 4 4 4 4 4 4 b
//                 c d d d c c b 5 5 5 5 5 5 5 b .
//                 c b d d d d d 5 5 5 5 5 5 5 b .
//                 . c d d d d d d 5 5 5 5 5 d b .
//                 . . c b d d d d d 5 5 5 b b . .
//                 . . . c c c c c c c c b b . . .
//             `, SpriteKind.Player)    
//             duck.setPosition(duckX, duckY)
//             duckX += 16
//             a -= 1
//             } else {
//                 break
//             }

//         }
//         if (a > 0) {
//             duckY += 16
//             duckX = duckPositionX
//         } else {
//             break
//         }
//     }
// }
let baseCol = 6;
let baseRow = 10;
let screenWidth = 160;
let screenHeight = 120;

let numberOfDucks = result

let scale = 1


if (numberOfDucks < 71) {
    scale = 1
} else if (numberOfDucks < 140) {
    scale = 0.5
} else if (numberOfDucks < 280) {
    scale = 0.25;
} else if (numberOfDucks < 560) {
    scale = 0.125;
} else if (numberOfDucks < 1120) {
    scale = 0.0625;
} else if (numberOfDucks < 2240) {
    scale = 0.03125;
} else if (numberOfDucks < 4480) {
    scale = 0.015625;
} else if (numberOfDucks < 8960) {
    scale = 0.0078125;
} else if (numberOfDucks < 17920) {
    scale = 0.00390625;
}
console.log("Scale: " + scale)
let duckPositionX = 8 * scale;
let duckPositionY = 8 * scale;
ducksPerRow = baseRow / scale
ducksPerCol = baseCol / scale
let duckY = duckPositionY
let duckX = duckPositionX
for (let a = numberOfDucks; a > 0; a) {
    for (let y = ducksPerCol; y > 0; y--) {
        for (let x = ducksPerRow; x > 0; x--) {
            if (a > 0) {
                console.log("( " + duckX + " , " + duckY + " )");
                let duck = sprites.create(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . b 5 5 b . . .
                    . . . . . . b b b b b b . . . .
                    . . . . . b b 5 5 5 5 5 b . . .
                    . b b b b b 5 5 5 5 5 5 5 b . .
                    . b d 5 b 5 5 5 5 5 5 5 5 b . .
                    . . b 5 5 b 5 d 1 f 5 d 4 f . .
                    . . b d 5 5 b 1 f f 5 4 4 c . .
                    b b d b 5 5 5 d f b 4 4 4 4 b .
                    b d d c d 5 5 b 5 4 4 4 4 4 4 b
                    c d d d c c b 5 5 5 5 5 5 5 b .
                    c b d d d d d 5 5 5 5 5 5 5 b .
                    . c d d d d d d 5 5 5 5 5 d b .
                    . . c b d d d d d 5 5 5 b b . .
                    . . . c c c c c c c c b b . . .
                `, SpriteKind.Player)
                duck.setScale(scale, ScaleAnchor.Middle)
                duck.setPosition(duckX, duckY)

                duckX += 16 * scale;
                a -= 1;
            } else {
                break;
            }
        }
        if (a > 0) {
            duckY += 16 * scale;
            duckX = duckPositionX;
        } else {
            break;
        }
    }
}
