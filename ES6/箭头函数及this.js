//问：箭头函数中this的值是如何查找的呢？
//答：向外层作用域一层层地
const obj = {
  aaa() {
    setTimeout(function () {
      //1
      console.log(this);//window
      //2
      setTimeout(function () {
        console.log(this);//window
      })
      //3
      setTimeout(() => {
        console.log(this);//window
      })
    })
    //4
    console.log(this);//object
    setTimeout(() => {
      //5
      console.log(this);//object
      //6
      setTimeout(function () {
        console.log(this);//window
      })
    })

    //5
    setTimeout(() => {
      console.log(this);//object
    })

  }
}

obj.aaa();