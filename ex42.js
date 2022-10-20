// problem : Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by
//  adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
const make_great = (arr) => {
  arr.forEach((arr) => console.log(`Great to each magician’s ${arr}`))
}
make_great(['aa', 'bb', 'cc', 'dd'])
