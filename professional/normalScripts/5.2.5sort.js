/*
function compare(value1,value2){
    return value1-value2;
}
let values = [9,3,10,1,2];
//let values = ["a","u",'w',"c","b"];
values.sort(compare);
console.log(values);

const arr = [{ name: "crystal" },{ name: "tom" },  { name: "duota" },{ name: "lala" }];
arr.sort((a, b) => a.name[1] > b.name[1]);

const arr = [{ name: "crystal" },{ name: "tom" },  { name: "duota" },{ name: "lala" }];
//arr.sort((a, b) => a.name > b.name);
arr.sort();
console.log(arr);
*/
const arr = [{ name: "crystal" },{ name: "tom" },  { name: "duota" },{ name: "lala" }];
arr.sort((a, b) => a.name[1] > b.name[1]);
console.log(arr);
