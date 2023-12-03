let fs = require("fs")
let data = fs.readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n")

let ans = 0;
let sum = 0;

let isSymbols = (data, i, j) => {
    try {
        let n = data[i][j]
        if (n == '*') return { i, j }
        return false
    } catch { return false }
}

let lt = new Map();

for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let num = 0, arr = [];
    for (let j = 0; j < item.length; j++) {
        if (item[j] >= '0' && item[j] <= '9') {
            num = num * 10 + parseInt(item[j]);
            let see = isSymbols(data, i, j - 1) || isSymbols(data, i, j + 1) ||
                isSymbols(data, i - 1, j) || isSymbols(data, i - 1, j - 1) || isSymbols(data, i - 1, j + 1) ||
                isSymbols(data, i + 1, j) || isSymbols(data, i + 1, j - 1) || isSymbols(data, i + 1, j + 1);
            if (see) {
                let ys = 1;
                for (let i = 0; i < arr.length; i++)
                    if (arr[i].i == see.i && arr[i].j == see.j) ys = 0;
                if (ys == 1) arr.push(see)
            }
        } else {
            if (num != 0) {
                console.log(num, arr);
                for (let i = 0; i < arr.length; i++) {
                    for (let i = 0; i < arr.length; i++) {
                        if (!lt[arr[i].i + ":" + arr[i].j]) {
                            lt[arr[i].i + ":" + arr[i].j] = new Array();
                            lt[arr[i].i + ":" + arr[i].j].push(num)
                        }
                        else lt[arr[i].i + ":" + arr[i].j].push(num)
                    }
                }
            }
            num = 0;
            arr = []
        }
    }

    if (num != 0) {
        for (let i = 0; i < arr.length; i++) {
            if (!lt[arr[i].i + ":" + arr[i].j]) {
                lt[arr[i].i + ":" + arr[i].j] = new Array();
                lt[arr[i].i + ":" + arr[i].j].push(num)
            }
            else lt[arr[i].i + ":" + arr[i].j].push(num)
        }
    }
}


for (let item in lt) {
    console.log(lt[item])
    if (lt[item].length > 1) ans = ans + lt[item][0] * lt[item][1]
}



console.log(ans)