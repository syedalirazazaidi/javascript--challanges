// problem : Sandwiches: Write a function that accepts a array of items a
//  person wants on a sandwich. The function should have one parameter that
//   collects as many items as the function call provides, and it should print a
//    summary of the sandwich that is being ordered. Call the function three times,
//     using a different number of arguments each time.

function making_sandwich(params) {
  params.forEach((arr) => console.log(`Great to each magician’s ${arr}`))
}
making_sandwich(['lettuce', 'onion', 'tomato', 'honey mustard'])
making_sandwich(['burger', 'ketchup', 'lettuce'])
making_sandwich(['subway', 'lettuce', 'onion', 'tomato'])
