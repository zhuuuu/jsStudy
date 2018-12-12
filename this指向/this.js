var fn=function(){
    this.a='a';
    this.b='b';
    this.c={
        a:'a+',
        b:function(){
            return this.a
        }
    }
}
console.log(new fn().c.b()) //a+

//箭头函数里的this
var fn=function(){
    this.a='a';
    this.b='b';
    this.c={
        a:'a+',
        b:()=>{
            return this.a
        }
    }
}
console.log( new fn().c.b()) //a
//调用嵌套函数时，若想访问这个外部函数的this值，需要将this的值保存在一个变量里，这个变量和内部函数都同在一个作用域内。
//通常使用self来保存this
var o={
    a:function(){
        var self=this;//将this的值保存在一个变量中
        console.log(this==o);//true
        f();
        function f(){
            console.log(this==o);//false  this的值是全局对象或undefined
            console.log(self==o);//true   self指外部函数的this值
        }
    }
}
o.a()


var msg = 'hello'
function Foo(msg) {
  this.msg = msg
}
Foo.prototype.log = function() {
  setTimeout(function() {
    console.log(this.msg)//undefined
    console.log(msg) //hello
  }, 2000)

  const that = this
  setTimeout(function() {
    console.log(that.msg)
  }, 1000)

  setTimeout(() => {
    console.log(this.msg)
  }, 4000)
}

const foo = new Foo('foo')

foo.log()
