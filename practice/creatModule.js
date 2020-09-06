function createModule(str1,str2) {
  let obj = {
    greeting: str1,
    name: str2,
    sayIt() {
      return this.greeting + ',' + this.name;
    }
  }
  return obj;
}

const result = createModule(1,2)
console.log(result);