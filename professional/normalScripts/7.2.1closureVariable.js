
function createFunction() {
    let result = new Array();

    //这里var i 改成let i 结果就不会全部是10，而是0123456789
    for (var i = 0; i < 10; i++) {
        result[i] = function(){
            return i;
        };
    }
    return result;
} 
let a = createFunction();
for (let j = 0; j < a.length; j++) {
    console.log(a[j]());
}

/*
function createFunction() {
    let result = new Array();

    for (let i = 0; i < 10; i++) {
        result[i] = function (num) {
            return function () {
                return num;
            };
        }(i);
    }
    return result;
}
*/
