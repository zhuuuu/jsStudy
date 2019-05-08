## $set使用
```
$set()方法给data对象新增属性，并触发试图更新
正确写法：this.$set(this.data,"key",value)
如 data(){
    return{
        people:{
            name:'',
            sex:'',

        }
    }
}
mounted(){
    this.$set(this.people,'age',20)
}

vue 数组内对象修改属性页面不渲染问题
```