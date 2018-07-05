## 向服务器发送请求
使用XMLHttpRequest 对象的open()和send()方法：
1)xhr.open(method,url,async) 
method:请求的类型；GET或POST
url:文件在服务器上的位置
async:true(异步)或false(同步)

2)xhr.send(string)将请求发送到服务器
string：仅用于POST请求

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