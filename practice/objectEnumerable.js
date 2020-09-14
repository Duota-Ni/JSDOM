
function Person() {
  this.name = "KXY";
}
Person.prototype = {
  constructor: Person,
  job: "student",
};

var kxy = new Person();
kxy.kkk = "llll";
Object.defineProperty(kxy, "sex", {
  value: "female"

});
Object.defineProperty(kxy, "jjj", {
  value: "nice"

});


for(var pro in kxy) {
  console.log("kxy." + pro + " = " + kxy[pro]);
}


