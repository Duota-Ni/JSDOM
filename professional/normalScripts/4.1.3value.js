//测试按值传递
//引用类型
function setName(obj){
    obj.name = "Duota";
    obj = new Object;
    obj.name ="Yang";
    return obj;
}
var person = new Object();
var x = setName(person);
console.log(person.name);
console.log(x.name);