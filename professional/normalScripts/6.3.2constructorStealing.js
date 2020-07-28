//借用构造函数
function SuperType(name){
    this.name = name;
}
function SubType(){
    //继承了SuperType,同时还传递了参数
    SuperType.call(this,'Dupota');
    //实例属性
    this.age = 20;
}
let instanct = new SubType();
console.log(instanct.name);

let test = new SuperType();
console.log(test.name);//undifined