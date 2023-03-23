// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]
// index      0   1    2   3  4  5    6
// Write your solution below:
//First Attempt
array.sort(function(a,b){return a-b});{
    console.log(array)
}


  const highest = Math.max(...array);

  const lowest = Math.min(...array);

console.log("Highest Number: " + highest);

console.log("Lowest Number: " + lowest);

// Solution provided in lecture

let smallest = arr[0]
let largest = arr[0]

for(let i = 0; i < arr.length; i++){
  //  console.log(arr[i])
  console.log(`The current value at index ${i} is ${arr[i]}`)
  if(arr[i] < smallest){
    console.log(`${arr[i]} is smaller than ${smallest}`)
    smallest = arr[i]
    console.log(`The new smallest value in arr [${arr}] is ${smallest}`)
} else if (arr[i] > largest){
    console.log(`${arr[i]} is larger than ${largest}`)
    largest = arr[i]
    console.log(`The new largest value in arr [${arr}] is ${largest}`)
}
 
}
console.log("================================")
console.log(`Inside the arr [${arr}], the largest value is ${largest}, and the smallest value is ${smallest}`)