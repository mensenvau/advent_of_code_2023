let fs = require("fs")
let data = fs.readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n\n")
let arr = data[0].replace("seeds: ", "").split(" ").map((item) => parseInt(item))

let toConvert = (arr, str) => {
    let res = []
    let nums = []
    let num = str.split("\n");
    for (let i = 1; i < num.length; i++) {
        nums.push(num[i].split(" ").map((item) => parseInt(item)))
    }

    for (let i = 0; i < arr.length; i++) {
        cid = arr[i]
        for (let j = 0; j < nums.length; j++) {
            if (arr[i] - nums[j][1] <= nums[j][2] && arr[i] - nums[j][1] >= 0) {
                cid = arr[i] - nums[j][1] + nums[j][0]; break;
            }
        }
        res.push(cid)
    }

    console.log(arr, nums, res)
    return res;
}


for (let i = 1; i < data.length; i++) {
    arr = toConvert(arr, data[i])
}

let m = 100000000000000000;
for (let i = 0; i < arr.length; i++) {
    m = Math.min(m, arr[i])
}

console.log("Answer:", m)


