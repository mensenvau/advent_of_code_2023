let fs = require("fs")
let input = fs.readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n")

let map = {}
let road = input[0];

for (let i = 2; i < input.length; i++) {
    let [x, y] = input[i].split(" = ")
    y = y.replace("(", "").replace(")", "").split(", ")
    map[x] = { l: y[0], r: y[1] }
}

let count = 0;
let isFound = 0;
let start = "AAA"

while (!isFound) {
    for (let i = 0; i < road.length; i++) {
        count++
        if (road[i] == 'L') {
            start = map[start].l
        } else {
            start = map[start].r
        }
        if (start == 'ZZZ') isFound = 1
    }
}

console.log(count)