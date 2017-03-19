function deretBilangan(n) {
    var arr2 = []
    for (var i = 1; i <= 100000; i++) {
        if (i % 3 == 0) {
            arr2.push(i)
        }
    }

    var arr = []
    for (var i = 0; i < n; i++) {
        if (arr2[i] % 5 == 0 && arr2[i] % 6 == 0) {
            arr.push("KASKUS")
        } else if (arr2[i] % 5 == 0) {
            arr.push("KAS")
        } else if (arr2[i] % 6 == 0) {
            arr.push("KUS")
        } else {
            arr.push(arr2[i])
        }
    }
    return arr;
}
// console.log(deretBilangan(9));
// result: [3,'KUS', 9, 'KUS', 'KAS', 'KUS', 21, 'KUS', 27, 'KASKUS', 'KUS', 21, 'KUS', 27, 'KASKUS']

module.exports = deretBilangan
