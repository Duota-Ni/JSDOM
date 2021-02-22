// ajax封装
function ajax(options) {
  let opts = Object.assign({
    url: "",
    method: "",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    async: true,
    data: {},
    dataType: "",
    success(res) { }
  }, options)
  let xhr = new XMLHttpRequest()
  if (opts.method.toLowerCase() === "get") {
    opts.url = opts.url + "?" + o2u(opts.data)
  }
  xhr.open(opts.method, opts.url)
  let sendData
  if (opts.headers["content.type" === "application/x-www-form-urlencoded"]) {
    sendData = o2u(opts.data)
  } else {
    sendData = JSON.stringify(opts.data)
  }
  xhr.onload = function () {
    if (opts.dataType = "json") {
      opts.success(JSON.parse(xhr.responseText))
    } else {
      opts.success(xhr.responseText)
    }
  }
  xhr.send(sendData)
  function o2u(obj) {
    let keys = Object.keys(obj)
    let value = Object.values(obj)
    return keys.map((v, k) => `${v}=${values[k]}`).join("&")
  }
}

// 使用post方法去请求数据需要setRequestHeader, formDatac除外
// xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
// xhr.setRequestHeader("content-type", "application/json");