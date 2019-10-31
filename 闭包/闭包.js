//闭包作用是缓存，缓存就是一个变量
//闭包是函数f1，返回函数f2 。（1：f2 定义在f1内，2：f2引用f1的一个变量，这个变量会保持操作之后的状态）

var c = 0
var f = function (m) {
    return ++m
}
var result = f(c)
console.log(result)
console.log(result)

var f2 = (function f1() {
    var count = 0
    return function f2() {
        return ++count
    }
})()
//f2()函数根本不接受参数，它使用的值是从执行环境中获取的
console.log(f2())//1
console.log(f2())//2
console.log(f2())//3

for (var i=0;i<5;i++){
    (function(i){
      setTimeout(function(){
        console.log(i)
      }, 1000);
    }(i))
}//0 1 2 3 4 闭包

for (var i=0;i<5;i++){
    setTimeout(() => {
        console.log(i)
      }, 1000);
}// 5 5 5 5 5 

for (let i=0;i<5;i++){
    setTimeout(() => {
      console.log(i)
  }, 1000);
} // 0 1 2 3 4 let块级作用域
