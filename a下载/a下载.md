## a下载文件至本地
```
<a href="img/photo.jpg" download="img">下载图片</a>

参数介绍： 
      download 参数默认为要下载的链接图片 
      上文 download=”img”，表示下载的文件名为img

     其中href后面是需要下载的文件的url（如果是链接到页面则会下载此页面）downlond的参数（上面代码中的img）是指定下载文件名，它不一定是原文件名(上面代码中的photo)。

利用get请求 动态创建 a 标签并触发点击事件
ex:   const url= ` /intelligent_diagnosis_course/download_attachment?course_id=${course_id}`
      const link =$('<a href="'+ url +'"></a>')
      link.get(0).click()

      var $a = '<a class="goPageA" href="javascript:" onclick="' + onclickFuncName + '(' + curPage + ', this)"></a>'
      $('.pagination').append($a)
      $('.goPageA').eq(0).click() 
```