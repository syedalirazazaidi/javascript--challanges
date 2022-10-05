// problem : 24 =More Conditional Tests: You don’t have to limit the number of
// tests you create to 10. If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater
//  than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
// let str = 'aliraza'
// console.log(str === 'aliraza' ? true : false)
// console.log(str !== 'aliraza' ? true : false)

// var a = 'hello1'
// var b = 'hello2'
// console.log('a === a?' + (a === a) + '|')
// console.log('a === b?' + (a === b) + '|')

// var letters = ['a', 'b', 'c', 'A', 'B', 'C', '(', ')', '+', '-', '~', '*']
// for (let i = 0; i < letters.length; i++) {
//   if (
//     letters[i] === letters[i].toUpperCase() &&
//     letters[i] !== letters[i].toLowerCase()
//   ) {
//     console.log(letters[i] + ': ' + true)
//   } else {
//     console.log(letters[i] + ': ' + false)
//   }
// }

// const alligatorFacts = ['thick scales', 80, '4 foot tail', 'rounded snout', 80]
// console.log(alligatorFacts.includes('thick scales', 0))

const alligatorFacts = ['thick scales', 80, '4 foot tail', 'rounded snout', 80]
console.log(alligatorFacts.indexOf('rounded snout'))
console.log(alligatorFacts.indexOf('soft and fluffy'))
