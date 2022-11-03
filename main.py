def drawRectangles(colour: number, rectangleNumber: number, speed: number, dynamicRefresh: bool):
    global rectangleToDraw
    if rectangleNumber == 1:
        rectangleToDraw = rectangle1
    elif rectangleNumber == 2:
        rectangleToDraw = rectangle2
    elif rectangleNumber == 3:
        rectangleToDraw = rectangle3
    else:
        rectangleToDraw = rectangle4
    for value in rectangleToDraw:
        tileDisplay.set_matrix_color(value[0], value[1], colour)
        if dynamicRefresh:
            tileDisplay.show()
        basic.pause(speed / len(rectangleToDraw))
    if not (dynamicRefresh):
        tileDisplay.show()
def initVariables():
    global tileDisplay, colour2, rectangle1, rectangle2, rectangle3, rectangle4
    tileDisplay = Kitronik_Zip_Tile.create_zip_tile_display(1, 1, Kitronik_Zip_Tile.UBitLocations.HIDDEN)
    tileDisplay.set_brightness(25)
    tileDisplay.clear()
    tileDisplay.show()
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    colour2 = Kitronik_Zip_Tile.colors(ZipLedColors.RED)
    rectangle1 = [[3, 3], [4, 3], [4, 4], [3, 4]]
    rectangle2 = [[2, 2],
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
        [2, 3]]
    rectangle3 = [[1, 1],
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
        [1, 2]]
    rectangle4 = [[0, 0],
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
        [0, 1]]
colour2 = 0
tileDisplay: Kitronik_Zip_Tile.ZIPTileDisplay = None
rectangle4: List[List[number]] = []
rectangle3: List[List[number]] = []
rectangle2: List[List[number]] = []
rectangle1: List[List[number]] = []
rectangleToDraw: List[List[number]] = []
initVariables()

def on_forever():
    while True:
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.BLUE), 1, 200, True)
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.YELLOW), 2, 200, True)
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.BLUE), 3, 200, False)
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.YELLOW), 4, 2000, True)
        basic.pause(500)
        tileDisplay.clear()
        tileDisplay.show()
basic.forever(on_forever)
