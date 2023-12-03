let fs = require("fs")


let data = fs.readFileSync(__dirname + "/index.txt", { encoding: "utf-8" }).split("\n")
let ans = 0;

for (let i = 0; i < data.length; i++) {
    let x = 0, y = 0;
    for (let k = 0; k < data[i].length; k++) {
        x = parseInt(data[i][k]);
        if (x >= 0 && x < 10) break;
    }


    for (let k = data[i].length - 1; k >= 0; k--) {
        y = parseInt(data[i][k]);
        if (y >= 0 && y < 10) break;
    }

    ans = ans + x * 10 + y;
    console.log(data[i], x, y)
}

console.log(ans)