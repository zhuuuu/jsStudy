## Promise
```
1. Promise 是一个构造函数,自身有all reject resolve 方法,原型上有then catch 方法, Promise new出来的对象    肯定就有then catch方法.

2. 使用Promise时一般是包在一个函数中,在需要时去运行这个函数
   function fn(){
       var promise = new Promise((resolve,reject)=>{
           setTimeout(()=>{
               console.log('hello')
               resolve('promise')
           },1000)
       })
       return promise
   }
   fn()  // hello

3. then的用法
   fn().then(data=>{
       console.log(data)
   })
    结果: hello
          promise

   then 接收一个参数,是函数,并且会拿到fn()中调用的resolve时传的参数
   then 里面的函数和我们平时的回调函数一个意思,能够在fn()异步任务执行完成之后被执行
   Promise 能把原来的回调写法分离出来,在异步操作执行完后,用链式调用的方法执行回调函数

4. catch的用法
   catch用来指定reject的回调 
   另外,在执行reslove的回调时,如果抛出异常(代码出错),并不会报错卡死js,而是会进到catch方法中
   fn.then(data=>{
       console.log(data)
       console.log(sData)
   }).catch(reason=>{
       console.log(reason)
   })
    sData变量未定义,会进入到catch方法中  把错误原因传到reason参数中
```