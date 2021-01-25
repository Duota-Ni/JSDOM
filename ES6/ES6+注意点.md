1. const
   ```js
   const obj = {
     a:"yy",
     b:"cc"
   }

   obj.a = "zoro" //可以改没问题
   ```
2. 箭头函数 直接返回对象
   ```js
   // 注意直接返回对象要加上小括号
   let test = ()=>({a:"rr",b:"ee"})
   ```