## 全局变量
```
全局使用this，指向顶层对象window
     function fn() {
        console.log(this === window);
      }
     fn() //true

```
## 构造函数
```
构造函数中的this，指的是实例对象
    function Obj(p1){
        this.p=p1;
    };
    var o=new Obj('hello');
    o.p  //'hello'
```
## 对象的方法
```
this的指向是方法运行时所在的对象.该方法赋值给另一个对象，就会改变this的指向。
    var obj ={
    foo: function () {
        console.log(this);
    }
    };

    obj.foo() //obj

```