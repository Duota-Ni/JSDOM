function endsWithVowel(str) {
const par = /[aeiou]$/i
return par.test(str)
}

const res = endsWithVowel('labbbE');
console.log(res);