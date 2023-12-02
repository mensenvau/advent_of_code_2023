let fs = require("fs")

let data = fs.readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n")
let sum = 0;

for (let item of data) {
    let num = parseInt(item.split(": ")[0].replace("Game ", ""))
    let game = item.split(": ")[1]
    let arr = { 'green': 0, "red": 0, 'blue': 0 }

    for (let child of game.split("; ")) {
        for (let k of child.split(",")) {
            str = k.trim()
            let num = parseInt(str.split(" ")[0])
            let color = str.split(" ")[1]

            // all
            arr[color] = Math.max(arr[color], num)
        }
    }

    sum = sum + arr['green'] * arr["red"] * arr['blue']
    console.log(num, arr, arr['green'] * arr["red"] * arr['blue'])
}


console.log(sum)