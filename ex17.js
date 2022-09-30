// problem:17=Shrinking Guest List: You just found out that your
// new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line
// that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two
// names remain in your list. Each time you pop a name from your
// list, print a message to that person letting them know you’re sorry you can’t
// invite them to dinner.

// • Print a message to each of the two people still on your list,
//  letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the end of your program

const newArrays = ['ali', 'daniyal', 'khurram', 'mehmood']
// A//
console.log('w ecan invite only two people for dinner.')
for (var index = newArrays.length - 1; index >= 0; index--) {
  if (newArrays.length > 2) {
    var element = newArrays[index]
    newArrays.pop()
    console.log('sorry', element, 'we  can’t invite them to dinner.')
  }
}
// B//
console.log(
  newArrays[0],
  '&',
  newArrays[1],
  'congrat!!! we  are invited for a dinner.',
)
//C//
for (var index = 0; index < newArrays.length + 1; index++) {
  newArrays.pop()
}
console.log(`now we ave empty ${newArrays.length} list`)
