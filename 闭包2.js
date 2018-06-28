function callLater(obj, key, val) {
    return function () {
        obj[key] = val;
        return obj
    };
}
var o = {}
var funcRef = callLater(o, "a", 1);
console.log(funcRef())


function f1(a){
    // var a=1;
    return function f2(b){
        a++;
        return  a+b
    }
}
var c=f1(1);
console.log(c(3));
console.log(c(3));