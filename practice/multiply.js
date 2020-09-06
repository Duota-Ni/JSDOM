function multiply(a, b) {
  const aFlo = a.toString().split('.')[1] || ''
  const bFlo = b.toString().split('.')[1] || ''
  allFlo = aFlo.length + bFlo.length
  return a*b.toFixed(allFlo) 
}

console.log(multiply(2,0.0023));