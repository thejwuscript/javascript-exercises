const getTheTitles = function (obj) {

  let booktitles = obj.map(function (element) {
    return element.title;
  });
  return booktitles;
};

// Do not edit below this line
module.exports = getTheTitles;
