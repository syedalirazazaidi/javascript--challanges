// problem :14 = Guest List: If you could invite anyone, living or deceased,
// to dinner, who would you invite? Make a list that includes at least three people
// you’d like to invite to dinner. Then use your list to print a message to each person,
// inviting them to dinner.

const namesArray = ['ali', 'daniyal', 'khurram']
for (let index = 0; index < namesArray.length; index++) {
  const element = namesArray[index]
  console.log(element, 'you have invited for a dinner ')
}
