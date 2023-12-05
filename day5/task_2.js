const fs = require("fs");
const path = require("path");
let data = fs.readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n\n")
let list = data[0].replace("seeds: ", "").split(" ").map((item) => parseInt(item))

let arr = [];

for (let i = 0; i < list.length; i += 2) {
    arr.push([list[i], list[i] + list[i + 1]]);
}

let toConvert = (arr, str) => {
    let res = []
    let nums = []
    let num = str.split("\n");
    for (let i = 1; i < num.length; i++) {
        nums.push(num[i].split(" ").map((item) => parseInt(item)))
    }

    for (let i = 0; i < arr.length; i++) {
        let start = arr[i][0]
        let end = arr[i][1]
        let is = 1;

        for (let j = 0; j < nums.length; j++) {
            let ms = Math.max(start, nums[j][1])
            let me = Math.min(end, nums[j][1] + nums[j][2])
            if (ms < me) {
                is = 0;
                res.push([ms - nums[j][1] + nums[j][0], me - nums[j][1] + nums[j][0]])
                if (ms > start) arr.push([start, ms])
                if (end > me) arr.push([me, end])
                break;
            }
        }

        if (is == 1) {
            res.push([start, end])
        }
    }
    return res
}

for (let i = 1; i < data.length; i++) {
    arr = toConvert(arr, data[i]);
}

console.log(arr)
let m = 1000000000000000
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] < m) m = arr[i][0]
}

console.log("Answer:", m);
