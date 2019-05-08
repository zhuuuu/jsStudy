## throttle-debounce
```
 限制函数的执行频率

```
## throttle
```
节流(限制函数的执行频率),保证多少ms内只执行一次

应用场景:
  监听resize事件做一些DOM元素的定位更改；
  监听scroll 事件判断上拉时是否要加载数据

 throttle(delay,callback)

 //窗口大小改变,ueditor自适应
    this.$nextTick(() => {
    window.onresize = throttleDebounce.throttle(1000, function() {
    const editor: any = document.getElementById('edui1')
    editor.style.width = '100%'
    })
})
```
## debounce
```
去抖(限制函数的执行频率),保证多少ms内不再被触发时就会执行一次

应用场景:
 搜索框输入发送ajax请求，监听onchange or keyup 事件进行查询
 文字输入、自动完成的keyup事件
debounce(delay,callback)
```