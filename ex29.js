// problem : Favorite Fruit: Make a array of your favorite fruits,
// and then write a series of independent if statements that check for
// certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of
// fruit is in your array. If the fruit is in your array, the if block should
//  print a statement, such as You really like bananas!

const favorite_fruits = ['apple', 'mango', 'banana']
for (let index = 0; index < favorite_fruits.length; index++) {
  if (favorite_fruits[index] === 'graph') {
    console.log('not your favouite fruit', favorite_fruits[index])
  } else {
    console.log('this is your favourite fruit', favorite_fruits[index])
  }
  // const element = array[index];
}
