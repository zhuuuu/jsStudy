
//1.JSON.stringify()用于将一个值转为JSON字符串,且可被JSON.parse()方法还原
//若对象的属性是undefined、函数或XML对象，该属性会被JSON.stringify过滤
    var obj = {
        a: undefined,
        b: function () { }
    };

    console.log(JSON.stringify(obj)) // "{}"


//2.JSON.parse()将JSON字符串转换成对应的值，
//可以接受一个处理函数，作为第二个参数
function f(key,value){
    if(key=='b'){
        return value+20;
    }
    return value;
}
console.log(JSON.parse('{"a":2,"b":4}',f))

