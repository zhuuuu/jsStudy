
function fn(opts) {
    var o = {};
    for (var key in opts) {
        o[key] = opts[key]+1
    }
    return o
}

console.log(fn({
    a: 1,
    b: 2
}))
