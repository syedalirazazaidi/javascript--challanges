// problem :16=More Guests: You just found a bigger dinner table,
// so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement
//  to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. •
// Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.

const newArrays = ['ali', 'daniyal', 'khurram']
newArrays.unshift('syed', 'ahmed', 'mehmood')

newArrays.splice(newArrays.length / 2, 0, 'Lene')
newArrays.push('hamzah')
console.log(newArrays)
var element = []
for (let index = 0; index < newArrays.length; index++) {
  const newElem = newArrays[index]
  console.log(newElem, 'you are invited for a bigger dinner table')
}
