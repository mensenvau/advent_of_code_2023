let fs = require("fs")
let input = fs.readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n")

let map = {}
let start = []
let road = input[0];

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) { var temp = a; a = b; b = temp; }
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}


for (let i = 2; i < input.length; i++) {
    let [x, y] = input[i].split(" = ")

    // save map
    y = y.replace("(", "").replace(")", "").split(", ")
    map[x] = { l: y[0], r: y[1] }

    // save start 
    if (x[2] == 'A') start.push(x)
}

console.log(start)

let ans = []

for (let k = 0; k < start.length; k++) {
    let count = 0;
    let isFound = 0;

    while (!isFound) {
        for (let i = 0; i < road.length; i++) {
            count++
            if (road[i] == 'L') start[k] = map[start[k]].l
            else start[k] = map[start[k]].r
        }

        if (start[k][2] == 'Z') isFound = 1
    }

    ans.push(count)
}

let res = ans[0]
for (let i = 0; i < ans.length; i++) res = res * ans[i] / (gcd(res, ans[i]))

console.log(res)