## Date
```
上个月月底(最后一个数为0)
new Date(2018,0,0)  //Sun Dec 31 2017
new Date(2018,12,0) //Mon Dec 31 2018

月份加1
new Date(2018,11,31) //  Mon Dec 31 2018

为负数时，转到上个月份
new Date(2018,0,1)  //Mon Jan 01 2018
new Date(2018,0,-1) // Sat Dec 30 2017
new Date(2018,-1,-1) // Wed Nov 29 2017
```
## Date的实例方法
```
大致分为三类：
to类：从Date对象返回一个字符串，表示指定的时间
get类：获取Date对象的日期和时间
set类：设置Date对象的日期和时间

valueOf()返回实例对象距离时间零点（1970年1月1日00:00:00 UTC）对应的毫秒数
与getTime相同
var t = new Date();
t.valueOf()  //1532418488753
t.getTime()

```
