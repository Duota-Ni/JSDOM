//原生ajax请求

//IE7+ Firefox chroms 等

//同步
// var xhr = new XMLHttpRequest();//1.创建XHR对象
// xhr.open("get","example.php",false)//2.使用XHR的open\send方法发送请求到服务器
// xhr.send(null);//send中的是请求主体
// //3.使用XHR对象的responseText和responseXML属性获得服务器响应
// if((xhr.status >= 200 && xhr.status <300) || xhr.status == 304){
//   console.log(xhr.responseText);
// }else{
//   console.log("request error" + xhr.status);
// }

//异步，一般是异步
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4){
    if((xhr.status >=200 && xhr.status < 300) && xhr.status == 304){
      console.log(xhr.responseText());
    }else{
      console.log("request error" + xhr.status);
    }
  }
}
//必须在open之前指定onreadystatechange,跨浏览器兼容性
xhr.open("get","example.txt",true)
xhr.setRequestHeader("MyHeader","MyValue")//自定义额外头部信息
xhr.send(null);

//在接收响应之前可以使用abort()取消异步请求
// xhr.abort();

let myHeader = xhr.getResponseHeader("MyHeader");//去某个头部信息
let allHeader = xhr.getAllResponseHeaders(); //取所有头部信息