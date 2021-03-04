1. 请求拦截器
请求拦截器的作用是在请求发送前进行一些操作，例如在每个请求体里加上token，统一做了处理如果以后要改也非常容易。
```js
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么，例如加入token
    .......
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
```
2. 响应拦截器
响应拦截器的作用是在接收到响应后进行一些操作，例如在服务器返回登录状态失效，需要重新登录的时候，跳转到登录页。
```js
axios.interceptors.response.use(function (response) {
    // 在接收响应做些什么，例如跳转到登录页
    ......
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```
3. 移除拦截器
```js
var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```
1. 为axios实例添加拦截器
```js
var instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```