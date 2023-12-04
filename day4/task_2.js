let fs = require("fs")
let data = fs.readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n")

let sum = 0
let arr = []
for (let i = 0; i < data.length; i++) arr.push(1)

for (let i = 0; i < data.length; i++) {
    let item = data[i]
    let v = item.split(": ")[1];
    let l = v.split(" | ")[0].split(" ")
    let r = v.split(" | ")[1].split(" ")

    let count = 0;
    for (let i = 0; i < r.length; i++) {
        for (let j = 0; j < l.length; j++) {
            if (l[j] == r[i] && l[j] != '') count++;
        }
    }

    for (let k = i + 1; k < Math.min(data.length, i + count + 1); k++) {
        arr[k] += arr[i]
    }
}

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
}

console.log(sum)
