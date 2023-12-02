let arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]


let find = (str, idx) => {
    for (let i = 0; i < arr.length; i++) {
        if (str.indexOf(arr[i], idx) == idx) {
            return i + 1
        }
    }
    return null
}


console.log(parseInt("fg") || find("onetwo", 3));
console.log(find("fdghj", 0));
console.log(find("one2vgvklpcqnxssjbone1six", "one2vgvklpcqnxssjbone1six".length - 3))

