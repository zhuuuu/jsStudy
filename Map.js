// const arr=[2,3];
// const map =new Map();
// map.set(arr,[5,4])
// console.log(map.get(arr)) //[5,4]


const obj={x:1},
      obj1={y:2}
const map = new Map();
map.set(obj,{y:0})
map.set(obj1,{z:9})
console.log(map.get(obj),map.get(obj1)) // {y:0} {z:9}
