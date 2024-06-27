const findTheOldest = function(people) {
    people.sort((a, b) => {return (getAge(a) > getAge(b)) ? -1 : 1})
    return people[0];
};

const getAge = function(person) {
    if (!person.yearOfDeath) {
        let currentYear = new Date().getFullYear();
        return currentYear - person.yearOfBirth;
    } else {
        return person.yearOfDeath - person.yearOfBirth;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
