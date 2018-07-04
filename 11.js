
//   new Promise(function (resolve, reject) {
//     $.ajax({
//         url:'xxxxx',
//         data:{},
//         type:"post",
//         success:function(list){
//                 //  
//               resolve(list)  
//               $.ajax({
//                   data:{list[0]}
//                   success(){       
//                   }
//               })
//         }
//     })
// }).then(function (list) {
//     $.ajax({
//         url:'xxxxx',
//         data:{list[]},
//         type:"post",
//         success:function(data){
//               resolve(data)  
//         }
//     })
// }, function () {
//     debugger
// }).catch(function () {
//     debugger
// })


//异步加载图片
new Promise(function(resolve,reject){
    const image = new Image();
    image.src = 'xxxxx';
    image.onload = function(){
        resolve(image);
    };
    image.onerror = function(){
        reject(new Error('error'))
    }
    
})


new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('x')
        resolve()
    }, 2000);
}).then(function () {
    console.time('aa')
    setTimeout(() => {
        console.log('y')
        console.timeEnd('aa')
    }, 1000);
} )
// function () {
//     debugger
// }).catch(function(){
//     debugger
// })



setTimeout(() => {
    console.log('x')
    // console.time('aa')
    setTimeout(() => {
        console.log('y')
        // console.timeEnd('aa')
    }, 1000);
    
}, 2000);

