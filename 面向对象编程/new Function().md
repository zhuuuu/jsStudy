## new Function()
```
new Function()是函数原型的一个实例化
new Function(参数1,参数2,...参数n,函数体)，通过实例化一个Function原型，得到一个数据类型为function的对象，也就是一个函数，而该变量就是函数名
var fn=new Function('a','alert(a)');
fn('hello');

//等价于
function fn(a){
    alert(a);
}
fn('hello')

```