+function a(){
    console.log(1)
}()

~function b(){
    console.log(2)
}()

console.log((function b(){
    return 3
})())

console.log((function(){
    return 4
})())