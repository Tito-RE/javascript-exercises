const findTheOldest = function(people) {
  people.forEach(element => {
    if (!element['yearOfDeath']) {
      element['age'] = 2023 - element.yearOfBirth;
    } else {
      element['age'] = element.yearOfDeath - element.yearOfBirth;
    }
  });
  people = people.sort((a,b) => a.age > b.age ? 1: -1);  
  return people[people.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
