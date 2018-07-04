/**
 * 1：变量定义提升
 */
console.log('----------------变量定义提升-----------------------------')


x = 1//赋值（初始化）
console.log(x)
var x//定义

//运行的时候，相当于，x定义提升到，程序运行的开始。
// var x//定义
// x = 1//（初始化）
// console.log(x)


y = 3//赋值（初始化）
console.log(y)
var y = 2//定义

console.log('------------------函数也是变量，真正的理解---------------------------')

/**
 * 2：函数f也是变量，定义提升。函数经常用，拿出来单独说一下
 */
f()
function f() {
    console.log('f')
}
//相当于
/*
function f() {
    console.log('f')
}
f()
*/
console.log(f1)
// f1()//会报错
var f1 = function () {
    console.log('f1')
}
//注意
// function f() { } 函数的声明,也是函数的初始化
// var f = function () { }  函数的声明,也是函数的初始化
