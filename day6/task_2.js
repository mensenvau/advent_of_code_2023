let fs = require("fs")
let [T, D] = fs.readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n")

let t = parseInt(T.split(":")[1].split(" ").join(""))
let d = parseInt(D.split(":")[1].split(" ").join(""))

console.log(t, d)

let count = 0;
for (let j = 1; j <= t; j++) {
    let dis = (t - j) * j
    if (dis > d) { count++; }
}

console.log(count)