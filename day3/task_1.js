let fs = require("fs")
let data = fs.readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n")

let ans = 0;
let sum = 0;

let isSymbols = (data, i, j) => {
    try {
        let n = data[i][j]
        if (n == undefined) return false
        if (n == '.') return false
        if (n >= '0' && n <= '9') return false
        return true
    } catch {
        return false
    }
}

for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let see = 0, num = 0;
    for (let j = 0; j < item.length; j++) {
        if (item[j] >= '0' && item[j] <= '9') {
            num = num * 10 + parseInt(item[j]);
            if (isSymbols(data, i, j - 1) || isSymbols(data, i, j + 1) ||
                isSymbols(data, i - 1, j) || isSymbols(data, i - 1, j - 1) || isSymbols(data, i - 1, j + 1) ||
                isSymbols(data, i + 1, j) || isSymbols(data, i + 1, j - 1) || isSymbols(data, i + 1, j + 1))
                see = 1;

            if (see == 1) console.log(num, j)
        } else {
            if (num != 0) {
                console.log(num, see);
                if (see == 1) { ans = ans + num }
            }
            num = 0;
            see = 0;
        }
    }

    if (num != 0) {
        console.log(num, see);
        if (see == 1) { ans = ans + num }
    }
}


console.log(ans)