const findTheOldest = function (array) {

  let oldestperson = array[0];
  for (i = 0; i < array.length; i++) {

    if (array[i].yearOfDeath === undefined) {
      let today = new Date();
      array[i].yearOfDeath = today.getFullYear();
    }

    let age1 = array[i].yearOfDeath - array[i].yearOfBirth;

    if (age1 > oldestperson.yearOfDeath - oldestperson.yearOfBirth) {
      oldestperson = array[i];
    }

  }

  return oldestperson;
}


// Do not edit below this line
module.exports = findTheOldest;
