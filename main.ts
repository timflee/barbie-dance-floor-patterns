function drawRectangles (colour: number, rectangleNumber: number, speed: number, dynamicRefresh: boolean) {
    if (rectangleNumber == 1) {
        rectangleToDraw = rectangle1
    } else if (rectangleNumber == 2) {
        rectangleToDraw = rectangle2
    } else if (rectangleNumber == 3) {
        rectangleToDraw = rectangle3
    } else {
        rectangleToDraw = rectangle4
    }
    for (let value of rectangleToDraw) {
        tileDisplay.setMatrixColor(value[0], value[1], colour)
        if (dynamicRefresh) {
            tileDisplay.show()
        }
        basic.pause(speed / rectangleToDraw.length)
    }
    if (!(dynamicRefresh)) {
        tileDisplay.show()
    }
}
function initVariables () {
    tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
    tileDisplay.setBrightness(25)
    tileDisplay.clear()
    tileDisplay.show()
    period = 1
    period2 = 25
    music.playTone(262, music.beat(BeatFraction.Whole))
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
    rectangle4 = [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
    [7, 0],
    [7, 1],
    [7, 2],
    [7, 3],
    [7, 4],
    [7, 5],
    [7, 6],
    [7, 7],
    [6, 7],
    [5, 7],
    [4, 7],
    [3, 7],
    [2, 7],
    [1, 7],
    [0, 7],
    [0, 6],
    [0, 5],
    [0, 4],
    [0, 3],
    [0, 2],
    [0, 1]
    ]
}
let colour2 = 0
let period2 = 0
let period = 0
let tileDisplay: Kitronik_Zip_Tile.ZIPTileDisplay = null
let rectangle4: number[][] = []
let rectangle3: number[][] = []
let rectangle2: number[][] = []
let rectangle1: number[][] = []
let rectangleToDraw: number[][] = []
initVariables()
basic.forever(function () {
    while (true) {
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.Red), 1, period, false)
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.Black), 1, period2, false)
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.Orange), 2, period, false)
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.Black), 2, period2, false)
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.Yellow), 3, period, true)
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.Black), 3, period2, true)
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.Green), 4, period, true)
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.Black), 4, period2, true)
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.Blue), 3, period, true)
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.Black), 3, period2, true)
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.Indigo), 2, period, false)
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.Black), 2, period2, false)
        basic.pause(period)
        tileDisplay.clear()
        tileDisplay.show()
    }
})
