function drawRectangles (colour: number, rectangleNumber: number, speed: number) {
    if (rectangleNumber == 1) {
        rectangleToDraw = rectangle1
    } else if (rectangleNumber == 2) {
        rectangleToDraw = rectangle2
    } else if (rectangleNumber == 3) {
        rectangleToDraw = rectangle3
    } else {
        rectangleToDraw = rectangle3
    }
    for (let value of rectangleToDraw) {
        tileDisplay.setMatrixColor(value[0], value[1], colour)
        basic.pause(speed)
    }
}
function initVariables () {
    tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(8, 8, Kitronik_Zip_Tile.UBitLocations.Hidden)
    colour2 = Kitronik_Zip_Tile.colors(ZipLedColors.Red)
    rectangle1 = [
    [3, 3],
    [4, 3],
    [4, 4],
    [3, 4]
    ]
    rectangle2 = [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [5, 3],
    [5, 4],
    [5, 5],
    [4, 5],
    [3, 5],
    [2, 5],
    [2, 4],
    [2, 3]
    ]
    rectangle3 = [
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1],
    [6, 2],
    [6, 3],
    [6, 4],
    [6, 5],
    [6, 6],
    [5, 6],
    [4, 6],
    [3, 6],
    [2, 6],
    [1, 6],
    [1, 5],
    [1, 4],
    [1, 3],
    [1, 2]
    ]
}
let colour2 = 0
let tileDisplay: Kitronik_Zip_Tile.ZIPTileDisplay = null
let rectangle3: number[][] = []
let rectangle2: number[][] = []
let rectangle1: number[][] = []
let rectangleToDraw: number[][] = []
initVariables()
basic.forever(function () {
    while (true) {
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.Red), 1, 100)
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.Orange), 2, 50)
    }
})
