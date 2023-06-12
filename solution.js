const number=function(array){
 let count = 1
 let finalArr = []
 for (let i = 0; i < array.length; i++) {
    finalArr.push(`${count}: ${array[i]}`)
    count++
 }
 return finalArr
}

console.log(number([]))
console.log(number(['a', 'b', 'c']))


// Alternate Solution


const numbers=function(array){
    return array.map((e, i) => `${i + 1}: ${e}`)
}
   
console.log(numbers([]))
console.log(numbers(['a', 'b', 'c']))