// problem :23 =Conditional Tests: Write a series of conditional tests.
//  Print a statement describing each test and your prediction for the
//  results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand
// why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to
// True and another 5 tests evaluate to False.

let car = 'subaru'
if (car === 'subaru') {
  console.log(`Is ${car !== 'subaru'}? I predict True.`)
}
let Motor = 'marcedex'
if (Motor === 'marcedex') {
  console.log(`Is ${Motor === 'marcedex'}? I predict True.`)
}
if (Motor !== 'benz') {
  console.log(`Is ${Motor === 'marcedex'}? I predict True.`)
}
let truck = 'heno'
if (truck === 'heno') {
  console.log(`Is ${truck === 'tralla'}? I predict false.`)
}
if (truck === 'heno') {
  console.log(`Is ${truck !== 'tralla'}? I predict false.`)
}
if (truck === 'metu') {
  console.log(`Is ${truck !== 'tralla'}? I predict false.`)
}
let bike = 'honda'

if (bike === 'honda') {
  console.log(`Is ${bike !== 'tralla'}? I predict false.`)
}
if (bike !== 'honda') {
  console.log(`Is ${bike !== 'tralla'}? I predict false.`)
}

let cycle = 'shora'

if (cycle !== 'honda') {
  console.log(`Is ${cycle !== 'tralla'}? I predict false.`)
}
