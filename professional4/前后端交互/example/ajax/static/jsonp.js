// 基于ajax对jsonp进行封装
function ajax(options) {
  let opts = Object.assign({
    url: "",
    method: "get",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    jsonp: "cb",
    async: true,
    data: {},
    dataType: "",
    success(res) { }
  }, options)
  // 处理jsonp请求
  if (opts.dataType === "jsonp") {
    jsonpFn(opts.url, opts.data, opts.jsonp, opts.success)
    return false
  }
  function jsonpFn(url, data, cbName, cbFn) {
    let fnName = "Duota_" + Math.random().toString().substr(2)
    window[fnName] = cbFn
    let path = url + "?" + o2u(data) + "&" + cbName + "=" + fnName
    let o = document.createElement("script")
    o.src = path
    document.querySelector("head").appendChild(o)
  }

  let xhr = new XMLHttpRequest()
  if (opts.method.toLowerCase() === "get") {
    opts.url = opts.url + "?" + o2u(opts.data)
  }
  xhr.open(opts.method, opts.url, true)
  for (let key in opts.headers) {
    xhr.setRequestHeader(key, opts.headers[key])
  }
  let sendData
  if (opts.headers["content.type" === "application/x-www-form-urlencoded"]) {
    sendData = o2u(opts.data)
  } else {
    sendData = JSON.stringify(opts.data)
  }
  xhr.onload = function () {
    if (xhr.getResponseHeader("content-type").includes("xml")) {
      resData = xhr.responseXML
    } else {
      resData = JSON.parse(xhr.responseText)
    }
    options.success(resData)
  }
  xhr.send(sendData)
  function o2u(obj) {
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    return keys.map((v, k) => `${v}=${values[k]}`).join("&")
  }
}
