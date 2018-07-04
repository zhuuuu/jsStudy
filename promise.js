// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('x')
//         resolve()
//     }, 2000);
// }).then(function () {
//     console.time('aa')
//     setTimeout(() => {
//         console.log('y')
//         console.timeEnd('aa')
//     }, 1000);
// } )

const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
  })
  
  const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
  })
  
  p2
    .then(result => console.log(result))
    .catch(error => console.log(error))