// Exercise-1:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var myName = 'aliraza zaidi'
console.log(`UpperCase :${myName.toUpperCase()}`)
console.log(`LowerCase :${myName.toLowerCase()}`)
var newName = myName.split(' ')
console.log(newName, 'newName')
for (var index = 0; index < newName.length; index++) {
  var element = newName[index].charAt(0).toUpperCase() + newName[index].slice(1)
  console.log(element)
}

function toTitleCase(str) {
  str = str.toLowerCase().split(' ')
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  return str.join(' ')
}
console.log(toTitleCase('hi this is a software engineer'))
