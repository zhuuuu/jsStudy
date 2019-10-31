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
console.log(map.size)// 2

//Map结构转为数组结构,比较快速的方法为扩展运算符（...）
const map1 = new Map([['name','zhu'],['city','heze']]);
console.log([...map1]) //[ [ 'name', 'zhu' ], [ 'city', 'heze' ] ]
console.log([...map1.keys()]) //[ 'name', 'city' ]

const map0 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

const map2 = new Map(
  [...map0].filter(([k, v]) => k < 3)
);
console.log(map2)






