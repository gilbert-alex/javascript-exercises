const findTheOldest = function(people) {
    people.sort((a, b) => {return (getAge(a) > getAge(b)) ? -1 : 1})
    return people[0];
};

const getAge = function(person) {
    if (person.yearOfDeath === undefined) {
        let today = new Date(Date.now());
        let currentYear = today.getFullYear();
        return currentYear - person.yearOfBirth;
    } else {
        return person.yearOfDeath - person.yearOfBirth;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
