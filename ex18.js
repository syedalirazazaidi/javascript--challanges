// problem:18=Seeing the World: Think of at least five places in the world you’d
// like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

const myArray = ['paris', 'makah', 'sawaad', 'najaf', 'dubai']

// • Print your array in its original order.
for (var index = 0; index < myArray.length; index++) {
  const element = myArray[index]
  console.log(element)
}
// • Print your array in alphabetical order without modifying the actual list.
const newArrays = []
// console.log(myArray[0].split('').sort().join(''))
for (var index = 0; index < myArray.length; index++) {
  const element = myArray[index].split('').sort().join('')
  newArrays.push(element)
}
// new arraya
console.log(newArrays)
// orignal array
// Show that your array is still in its original order by printing it.
console.log(myArray)

// • Print your array in reverse alphabetical order without
// changing the order of the original list.
const newRevArray = []
for (var index = 0; index < myArray.length; index++) {
  const element = myArray[index].split('').reverse().join('')
  newRevArray.push(element)
}
console.log(newRevArray)
// • Show that your array is still in its original order by printing it again.
console.log(myArray)

// • Reverse the order of your list. Print the array to show that its order has changed.
const sortedArray = [...myArray].sort()
console.log(sortedArray, 'SORTED ARRAY')

// • Reverse the order of your list again.
//  Print the list to show it’s back to its original order.
console.log(myArray)

// • Sort your array so it’s stored in alphabetical order. 
// Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order
// . Print the list to show that its order has changed.

