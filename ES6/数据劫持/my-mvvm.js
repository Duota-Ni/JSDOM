class Kvue extends EventTarget {
  constructor(options) {
    super()
    this.$options = options
    this.complie()
    this.observe(this.$options.data)
  }

  observe(data) {
    let keys = Object.keys(data)
    keys.forEach(key => {
      this.defineReact(data, key, data[key])
    })
  }

  defineReact(data, key, value) {
    const _this = this
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: this,
      get() {
        console.log("get..")
        return value
      },
      set(newValue) {
        console.log("set..")
        const event = new CustomEvent(key, { "detail": newValue })
        _this.dispatchEvent(event)
        value = newValue
      }
    })
  }

  complie() {
    const el = document.querySelector(this.$options.el)
    this.complieNode(el)
  }

  complieNode(el) {
    const childNodes = el.childNodes
    // console.log(childNodes)
    childNodes.forEach(node => {
      if (node.nodeType === 1) {
        // 元素标签
        let attrs = node.attributes
        Array.from(attrs).forEach(attr => {
          // console.log(attr)
          let attrName = attr.name
          let attrValue = attr.value
          if(attrName.indexOf("v-") === 0){
            attrName = attrName.substr(2)
            if(attrName === "html") {
              node.innerHTML = this.$options.data[attrValue]
            } else if (attrName = "model") {
              node.value = this.$options.data[attrValue]
              node.addEventListener("input",e => {
                // console.log(e.target.value)
                // 这里使用this.$options.data[attrValue]赋值因为data的数据实现了数据劫持可以通过set监听到
                this.$options.data[attrValue] = e.target.value
              })
            }
          }
        })
        if (node.childNodes.length > 0) {
          this.complieNode(node)
        }

      } else if (node.nodeType === 3) {
        // 文本
        const reg = /\{\{\s*(\S+)\s*\}\}/g
        const textContent = node.textContent
        if (reg.test(textContent)) {
          // console.log("有双花括号{{}}")
          // console.log(RegExp.$1)
          const $1 = RegExp.$1
          node.textContent = node.textContent.replace(reg, this.$options.data[$1])
          this.addEventListener($1, e => {
            // console.log("触发了修改")
            // 再次渲染数据
            // console.log(e.detail)
            const oldValue = this.$options.data[$1]
            const reg2 = new RegExp(oldValue) //正则表达式匹配变量用new RegExp(变量)，而不是 /oldValue/g
            node.textContent = node.textContent.replace(reg2, e.detail)
          })
        }
      }
    })
  }
}