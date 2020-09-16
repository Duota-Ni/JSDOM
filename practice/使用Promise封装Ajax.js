var onSuccess = function (result) { }; //成功的回调
var onFail = function (error) { }; //失败的回调
var req = new XMLHttpRequest();
req.open("POST", "www.baidu.com", true);
req.onload = function () {
  if (req.readyState === 4 && req.status === 200) {
    onSuccess(req.response);
  } else {
    onFail(req.statusText);
  }
}
req.onerror = function () {
  onFail(Error("网络异常"));
}

//原题答案
function ajax() {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open('GET', 'http://www.baidu.com')
    req.onload = function () {
      if (req.readyState === 4 && req.status === 200) {
        onSuccess(req.response);
      } else {
        onFail(req.statusText);
      }
    }
    req.onerror = function () {
      onFail(Error("网络异常"));
    }
  })
}


//GET方法
function getRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState != 4) return
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(this.responseText, xhr)
      } else {
        reject(xhr.responseText);
      }
    }
    xhr.send(null)
  })

}

//POST方法
function postJSON(url, data) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open("POST", url, true)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState != 4) return
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText)
      } else {
        reject(xhr.responseText)
      }
    }
    xhr.send(JSON.stringify(data))
  })
}

