## Object.getPrototypeOf()
```
返回参数对象的原型
var F = function () {};
var f = new F();
Object.getPrototypeOf(f) === F.prototype //true


Object.getPrototypeOf(p1)==Person.prototype //true
Object.getPrototypeOf(p1).name  //名字
```
## Object.create()
```
构造函数作为模板，可以生成实例对象。
若拿不到构造函数，只能拿到一个现有的对象。
可以以这个现有的对象作为模板，生成新的实例对象，使用Object.create()方法
        var person1 = {
            name: '小李',
            age: 28,
            greeting: function () {
                console.log('Hi! I\'m ' + this.name + '.');
            }
        };//对象

        var person2 = Object.create(person1) // Object.create()只须传入所需的原型对象
        person2.name // 小李
        person2.greeting() // Hi! I'm 小李.

Object.create()方法生成的新对象，动态继承了原型，在原型上添加或修改任何方法，会立刻反映在新对象上
        var obj1 = { p: 2 };
        var obj2 = Object.create(obj1);

        obj1.p = 3;
        obj2.p //3
```
## 原型和实例间的关系
```
1）instanceof()表示对象是否为某构造函数的实例  只能用于对象，不适用原始类型的值
        {} instanceof Object
        p1 instanceof Person 

2）isPrototypeOf()用来判断该对象是否为参数对象的原型
       var o1 = {};
       var o2 = Object.create(o1);
       var o3 = Object.create(o2);

       o2.isPrototypeOf(o3) // true
       o1.isPrototypeOf(o3) // true

       Object.prototype.isPrototypeOf({}) // true
       Object.prototype.isPrototypeOf([]) // true
       Object.prototype.isPrototypeOf(/xyz/) // true
       Object.prototype.isPrototypeOf(Object.create(null)) // false

       Person.prototype.isPrototypeOf(p1) //true

```  