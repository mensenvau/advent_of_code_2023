let fs = require("fs")


let data = fs.readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n")
let sum = 0;

let check = (str) => {
    str = str.trim()
    let num = parseInt(str.split(" ")[0])
    let color = str.split(" ")[1]

    if (color == 'red') {
        if (num > 12) return false;
    }

    if (color == 'green') {
        if (num > 13) return false;
    }

    if (color == 'blue') {
        if (num > 14) return false;
    }

    return true;
}

for (let item of data) {
    let num = parseInt(item.split(": ")[0].replace("Game ", ""))
    let game = item.split(": ")[1]
    let is = true;

    for (let child of game.split("; ")) {
        let gren = ""
        for (let k of child.split(",")) {
            if (!check(k)) is = false;
        }
        if (is == false) break;
    }

    if (is == true) sum = sum + num;
}


console.log(sum)