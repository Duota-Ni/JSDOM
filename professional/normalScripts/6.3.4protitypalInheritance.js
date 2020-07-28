//原型式继承
function object(o){
    function F(){};
    F.prototype = o;
    return new F();
}
let person = {
    name:'Duota',
    friends:['Yang','Crystal','Zoro']
};

let anotherPerson = object(person);
anotherPerson.name ='luffy';
anotherPerson.friends.push('sanji');

let yetAnotherPerson = object(person);
anotherPerson.name ='robn';
anotherPerson.friends.push('nami');
console.log(person.friends);
