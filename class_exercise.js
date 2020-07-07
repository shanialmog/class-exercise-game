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
        this.direction = null
    }

    move(direction) {
        if (direction === "right" && this.x >= 0 && this.x < 9) {
            // console.log(tiles[this.x][this.y])
            if (tiles[this.x + 1][this.y] === null) {
                tiles[this.x + 1][this.y] = "P"
                tiles[this.x][this.y] = null
                this.direction = "R"
                this.x += 1
            }
        } else if (direction === "left" && this.x > 0 && this.x <= 9) {
            if (tiles[this.x - 1][this.y] === null) {
                tiles[this.x - 1][this.y] = "P"
                tiles[this.x][this.y] = null
                this.direction = "L"
                this.x -= 1
            }
        } else if (direction === "up" && this.y >= 0 && this.y < 9) {
            if (tiles[this.x][this.y + 1] === null) {
                tiles[this.x][this.y + 1] = "P"
                tiles[this.x][this.y] = null
                this.direction = "U"
                this.y += 1
            }
        } else if (direction === "down" && this.y > 0 && this.y <= 9) {
            if (tiles[this.x][this.y - 1] === null) {
                tiles[this.x][this.y - 1] = "P"
                tiles[this.x][this.y] = null
                this.direction = "D"
                this.y -= 1
            }
        }
    }
}

class Enemy {
    constructor() {
        this.x = Math.floor(Math.random() * 10)
        this.y = Math.floor(Math.random() * 10)
        this.health = 200
        tiles[this.x][this.y] = "E"
    }
}


const canvas = document.getElementById("game-layer")
const context = canvas.getContext("2d")
const TILE_SIZE = 50

const render = () => {
    //render background
    context.fillStyle = "#efefef"
    context.fillRect(0, 0, canvas.width, canvas.height)
    //render player
    context.fillStyle = "#0D4A6F"
    context.fillRect(player1.x * TILE_SIZE, 450 - player1.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    switch (player1.direction) {
        case "R":
            context.lineWidth = 4
            context.beginPath();       // start a new path
            context.moveTo(player1.x * TILE_SIZE + TILE_SIZE, 450 - player1.y * TILE_SIZE +TILE_SIZE);    // start at (x,y)
            context.lineTo(player1.x * TILE_SIZE + TILE_SIZE, 450 - player1.y * TILE_SIZE);  // end at (x,y)
            context.strokeStyle = "#DAA520"
            context.stroke();
            break
        case "L":
            context.lineWidth = 4
            context.beginPath();       // start a new path
            context.moveTo(player1.x * TILE_SIZE, 450 - player1.y * TILE_SIZE + TILE_SIZE);    // start at (x,y)
            context.lineTo(player1.x * TILE_SIZE, 450 - player1.y * TILE_SIZE);  // end at (x,y)
            context.strokeStyle = "#DAA520"
            context.stroke();
            break
        case "U":
            context.lineWidth = 4
            context.beginPath();       // start a new path
            context.moveTo(player1.x * TILE_SIZE + TILE_SIZE, 450 - player1.y * TILE_SIZE);    // start at (x,y)
            context.lineTo(player1.x * TILE_SIZE, 450 - player1.y * TILE_SIZE);  // end at (x,y)
            context.strokeStyle = "#DAA520"
            context.stroke();
            break
        case "D":
            context.lineWidth = 4
            context.beginPath()    // start a new path
            context.moveTo(player1.x * TILE_SIZE, 450 - player1.y * TILE_SIZE + TILE_SIZE)    // start at (x,y)
            context.lineTo(player1.x * TILE_SIZE + TILE_SIZE, 450 - player1.y * TILE_SIZE + TILE_SIZE)  // end at (x,y)
            context.strokeStyle = "#DAA520"
            context.stroke()
            break
    }
    //render enemy
    context.lineWidth = 1
    context.strokeStyle = '#808000';
    context.strokeRect(enemy1.x * TILE_SIZE, 450 - enemy1.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    context.fillStyle = "#000"
    context.strokeRect(enemy2.x * TILE_SIZE, 450 - enemy2.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    context.fillStyle = "#000"
    context.strokeRect(enemy3.x * TILE_SIZE, 450 - enemy3.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
}


window.addEventListener("keydown", (event) => {
    console.log(`key=${event.key},code=${event.code}`)
    console.log(event.key)
    switch (event.key) {
        case "ArrowUp":
            player1.move("up")
            render()
            break
        case "ArrowRight":
            player1.move("right")
            render()
            break
        case "ArrowDown":
            player1.move("down")
            render()
            break
        case "ArrowLeft":
            player1.move("left")
            render()
            break
    }
    console.log(tiles)
    console.log("player", player1.x, player1.y, player1.direction)
})
let player1 = new Player()
console.log("palyer1", player1.x, player1.y)
let enemy1 = new Enemy()
console.log("enemy1", enemy1.x, enemy1.y)
let enemy2 = new Enemy()
console.log("enemy2", enemy2.x, enemy2.y)
let enemy3 = new Enemy()
console.log("enemy3", enemy3.x, enemy3.y)
console.log(enemy3)
// player1.move("right")
render()