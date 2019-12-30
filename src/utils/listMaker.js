"use strict";

exports.listMaker = function(array) {
  var output = `${array[0]}`;
  for (var index = 1; index < array.length - 1; index++) {
    output = output + `, ${array[index]}`;
  }

  if (array.length === 1) {
    return output;
  }

  return `${output} and ${array[array.length - 1]}`;
};
