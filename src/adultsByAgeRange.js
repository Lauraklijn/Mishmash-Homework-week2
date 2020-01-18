// JS file exist, and exported value should be a function (groupAdultsByAgeRange)
function groupAdultsByAgeRange(persons) {
  const fiveCategories = {
    teenager: [],
    youngAdult: [],
    adult: [],
    olderAdult: [],
    senior: []
  }; // Filters out people under the age of 18
  const adults = persons.filter(person => person.age >= 18);
  return adults.reduce((categories, currentPerson) => {
    if (currentPerson.age >= 18 && currentPerson < 21) {
      categories.teenager.push(currentPerson);
      return categories;
    }
    if (currentPerson.age >= 21 && currentPerson.age < 30) {
      categories.youngAdult.push(currentPerson);
      return categories;
    }
    if (currentPerson.age >= 31 && currentPerson.age < 40) {
      categories.adult.push(currentPerson);
      return categories;
    }
    if (currentPerson.age >= 41 && currentPerson < 50) {
      categories.olderAdult.push(currentPerson);
      return categories;
    }
    if (currentPerson.age >= 51) {
      categories.senior.push(curentPerson);
      return categories;
    }
  }, fiveCategories); //Group array of people by age
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;
