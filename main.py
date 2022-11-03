def drawRectangles(colour: number, rectangleNumber: number, speed: number):
    global rectangleToDraw
    if rectangleNumber == 1:
        rectangleToDraw = rectangle1
    elif rectangleNumber == 2:
        rectangleToDraw = rectangle2
    elif rectangleNumber == 3:
        rectangleToDraw = rectangle3
    else:
        rectangleToDraw = rectangle3
        for value in rectangleToDraw:
            tileDisplay.set_matrix_color(value[0], value[1], colour)
            basic.pause(speed)
def initVariables():
    global tileDisplay, colour2, rectangle1, rectangle2, rectangle3
    tileDisplay = Kitronik_Zip_Tile.create_zip_tile_display(8, 8, Kitronik_Zip_Tile.UBitLocations.HIDDEN)
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
colour2 = 0
tileDisplay: Kitronik_Zip_Tile.ZIPTileDisplay = None
rectangle3: List[List[number]] = []
rectangle2: List[List[number]] = []
rectangle1: List[List[number]] = []
rectangleToDraw: List[List[number]] = []
initVariables()

def on_forever():
    while True:
        drawRectangles(Kitronik_Zip_Tile.colors(ZipLedColors.RED), 1, 1)
basic.forever(on_forever)
