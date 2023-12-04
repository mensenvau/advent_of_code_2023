let fs = require("fs")
let data = fs.readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n")

let sum = 0;
for (let item of data) {
    let val = item.split(": ")[1];
    let l = val.split(" | ")[0].split(" ")
    let r = val.split(" | ")[1].split(" ")

    let count = 0, ans = 0;
    for (let i = 0; i < r.length; i++) {
        for (let j = 0; j < l.length; j++) {
            if (l[j] == r[i] && l[j] != '') count++;
        }
    }

    if (count > 0) {
        ans = ans + 1; count = count - 1;
        let n = 1;
        for (let i = 1; i <= count; i++) {
            ans = ans + n;
            n = n * 2;
        }
    }

    sum = sum + ans;

    console.log(ans)
}


console.log(sum)