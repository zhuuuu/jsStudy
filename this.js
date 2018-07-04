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
console.log(new fn().c.b())

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
console.log( new fn().c.b())