## 向服务器发送请求
使用XMLHttpRequest 对象的open()和send()方法：
1)xhr.open(method,url,async) 
method:请求的类型；GET或POST
url:文件在服务器上的位置
async:true(异步)或false(同步)

2)xhr.send(string)将请求发送到服务器
string：仅用于POST请求

xhr.readyState == 4(下载完成)  xhr对象所处的状态
xhr.status == 200(服务器正常返回) 服务器响应的http状态码
## get
```
	var xhrhttp = new XMLHttpRequest();
			xhrhttp.open("GET","demo_get2.asp?fname=Bill&lname=Gates",true);
            //向 URL 添加一个唯一的 ID:
			xhrhttp.send(null);
			xhrhttp.onreadystatechange = function() {
				if (xhrhttp.readyState == 4) {
					if (xhrhttp.status == 200) {
						var stringResult = xhrhttp.responseText;
						var jsonResult = JSON.parse(stringResult);

						self.status = jsonResult.data.status;
					}
				}
			};
```
## post
```
async search(page) {
			const self = this;
			<!-- let data = {
				status: this.statusValue,
				difficulty: this.difficultyValue,
				subject_id: this.subject_id,
			}; -->
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "url");
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			var sendMeta = tranlateObj2String(data);
			xhr.send(sendMeta);
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status == 200) {
						var stringResult = xhr.responseText;
						var jsonResult = JSON.parse(stringResult);

						self.dataList = jsonResult.data;
					}
				}
			};
		}

```
## 将对象转换成字符串
```
function tranlateObj2String(obj) {
	var str = "";
	for (var key in obj) {
		var keys = Object.keys(obj);
		var item;
		if (keys[0] == key) {
			item = key + "=" + obj[key];
		} else {
			item = "&" + key + "=" + obj[key];
		}
		str += item;
	}
	return str;
}
  tranlateObj2String({a:1,b:2,c:3})
  //"a=1&b=2&c=3"

```
## ajax 过程
```
1.创建XMLHttpRequest对象,即创建一个异步调用对象
2.创建一个新的HTTP请求,并制定该HTTP请求的方法、URL及验证信息
3.设置相应HTTP请求状态变化的函数
4.发送HTTP请求
5.获取异步调用返回的数据
6.使用JavaScript和DOM实现局部刷新
```