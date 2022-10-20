// Cities: Write a function called describe_city() that accepts the name
// of a city and its country. The function should print a simple sentence,
// such as Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.

const describe_city = (city, country) => {
  if (country !== undefined) {
    console.log(`${city} is in ${country}`)
  } else {
    console.log(`${city} is in Pakistan`)
  }
}
describe_city('karachi', 'pakistan')
describe_city('paris', 'france')
describe_city('peshawar')
