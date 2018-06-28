//闭包作用是缓存，缓存就是一个变量
//闭包是函数f1，返回函数f2 。（1：f2 定义在f1内，2：f2引用f1的一个变量，这个变量会保持操作之后的状态）

// var c = 0
// var f = function (m) {
//     return ++m
// }
// var result = f(c)
// console.log(result)
// console.log(result)

var f2 = (function f1() {
    var count = 0
    return function f2() {
        return ++count
    }
})()

console.log(f2())//1
console.log(f2())//2
console.log(f2())//3


