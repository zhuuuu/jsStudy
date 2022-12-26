
// 1.promise 实现
class Promise{
    constructor(executor){
        this.state = 'pending' // 等状态
        this.value = undefined  // 成功的值
        this.reason = undefined // 失败的值
        let resolve = (value)=>{
            if(this.state == 'pending'){
                this.state = 'fulfilled'
                this.value = value
            }
        }
        let reject = (reason)=>{
            if(this.state == 'pending'){
                this.state = 'rejected'
                this.reason = reason
            }
        }
        try{
            executor(resolve,reject)
        }catch(error){
            reject(error)
        }
    }
    then(onFulfilled,onRejected){
        if(this.state == 'fuifilled'){
            onFulfilled(this.value)
        }
        if(this.state == 'reject'){
            onRejected(this.reason)
        }
    }
}
// 2.promise.all实现
Promise.all = function(promises){
    return new Promise((resolve,reject)=>{
        let result = [] // 存放返回值
        let count = 0 // 计数器，判断异步完成
        if(promises.length == 0){
            resolve(result)
        }else{
            function processValue(i,data){
                result[i] = data 
                count++
                if(count == promises.length){
                    resolve(result)
                }
            }
            for(let i = 0;i < promises.length; i ++){
                Promise.resolve(promises[i]).then((data)=>{
                    processValue(i,data)
                },(err)=>{
                    reject(err)
                })
            }
        }
        
    })
}

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

