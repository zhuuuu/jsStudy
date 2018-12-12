
function f1(a){
    // var a=1;
    return function f2(b){
        a++;
        return  a+b
    }
}
// var c=f1();
var c=f1(1)
console.log(c(3));//5
console.log(c(3));//6