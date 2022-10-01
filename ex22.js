// problem:22=Intentional Error: If you haven’t received an array index
// error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error.
//  Make sure you correct the error before closing the program.

const array1 = [5, 12, 8, 130, 44]

let index = 2
array1[2] = 9
console.log(array1)

console.log(
  `Using an index of ${index} the item returned is ${array1.at(index)}`,
)

index = -2

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`)
