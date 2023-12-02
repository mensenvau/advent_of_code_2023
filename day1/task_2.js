let fs = require("fs")

let arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

let data = fs.readFileSync(__dirname + "/index.txt", { encoding: "utf-8" }).split("\n")
let ans = 0;

let find = (str, idx) => {
    for (let i = 0; i < arr.length; i++) {
        if (str.indexOf(arr[i], idx) == idx) {
            return i + 1
        }
    }
    return undefined
}


for (let i = 0; i < data.length; i++) {
    let x = 0, y = 0;
    for (let k = 0; k < data[i].length; k++) {
        x = parseInt(data[i][k]) || find(data[i], k);
        if (x >= 0 && x < 10) break;
    }

    for (let k = data[i].length - 1; k >= 0; k--) {
        y = parseInt(data[i][k]) || find(data[i], k);
        if (y >= 0 && y < 10) break;
    }

    ans = ans + x * 10 + y;
    console.log(data[i], x, y)
}

console.log(ans)