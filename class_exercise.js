// context.fillStyle = '#8c3331';
// context.fillRect(0, 0, 15, 20);


// Model the game board
// P = player
const tiles = {
    0: { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null },
    1: { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null },
    2: { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null },
    3: { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null },
    4: { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null },
    5: { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null },
    6: { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null },
    7: { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null },
    8: { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null },
    9: { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null }
}
// or:
// const tiles = [[null, null, null], [null, null, null], [null, null, null]]

class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.health = 200;
        tiles[0][0] = "P"
    }

    move(direction) {
        if (direction === "right" && this.x >= 0 && this.x < 9) {
            tiles[this.x + 1][this.y] = "P"
            tiles[this.x][this.y] = null
            this.x += 1
        } else if (direction === "left" && this.x > 0 && this.x < 9) {
            tiles[this.x - 1][this.y] = "P"
            tiles[this.x][this.y] = null
            this.x -= 1
        } else if (direction === "up" && this.y >= 0 && this.y < 9) {
            tiles[this.x][this.y + 1] = "P"
            tiles[this.x][this.y] = null
            this.y += 1
        } else if (direction === "down" && this.y > 0 && this.y < 9) {
            tiles[this.x][this.y - 1] = "P"
            tiles[this.x][this.y] = null
            this.y -= 1
        }
        console.log(tiles)
    }
}

const canvas = document.getElementById("game-layer")
const context = canvas.getContext("2d")
const TILE_SIZE = 50

const render = () => {
    context.fillStyle = "#efefef"
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "red"
    context.fillRect(player1.x*TILE_SIZE , 450-player1.y*TILE_SIZE, TILE_SIZE, TILE_SIZE)
}

let player1 = new Player()
player1.move("right")
render()