let fs = require("fs")
let [T, D] = fs.readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n")

let t = T.replace("Time:", "").trim().split(" ").filter((item) => item != '').map((item) => parseInt(item))
let d = D.replace("Distance:", "").trim().split(" ").filter((item) => item != '').map((item) => parseInt(item))

let ans = 1;

for (let i = 0; i < t.length; i++) {
    let count = 0;
    for (let j = 0; j <= t[i]; j++) {
        if ((t[i] - j) * j > d[i]) {
            count++;
            // console.log(j);
        }
    }

    console.log(count)
    ans = ans * count
    // console.log("end")
}

console.log(ans)
