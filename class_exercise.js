var canvas = document.getElementById("game-layer");
var context = canvas.getContext("2d");
context.fillStyle = "#efefef";
context.fillRect(0, 0, canvas.width, canvas.height);

class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.health = 200;
    }
    move(direction) {
        if (direction === "right" && this.x >= 0 && this.x < 10) {
            this.x += 1
        } else if (direction === "left" && this.x >= 0 && this.x < 10) {
            this.x -= 1
        } else if (direction === "up" && this.y >= 0 && this.y < 10) {
            this.y += 1
        } else if (direction === "down" && this.y >= 0 && this.y < 10) {
            this.y -= 1
        }
        console.log("x:",this.x, "y:", this.y)
    }
}
let player1 = new Player()
player1.move("down")
// class Enemy {
//     constructor() {
//         x = x;
//         y = y;
//     }
//     hit() {
//     }
// }

// class Archer extends Enemy {
//     constructor() {
//     }
// }
// class Soldier extends Enemy {
//     constructor() {
//     }
// }

