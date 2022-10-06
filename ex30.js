// problem :30 =Hello Admin: Make a array of
// five or more usernames, including the name 'admin'.
//  Imagine you are writing code that will print a greeting to
//  each user after they log in to a website. Loop through the array,
//  and print a greeting to each user:
// • If the username is 'admin', print a special
//  greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric,
//  thank you for logging in again.

const usernames = ['user1', 'user2', 'user3', 'user4', 'admin']
for (let index = 0; index < usernames.length; index++) {
  const element = usernames[index]
  if (element === 'admin') {
    console.log('hello admin')
  } else {
    console.log('Hello thank you for logging', usernames[index])
  }
}
