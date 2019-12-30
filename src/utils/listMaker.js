"use strict";

exports.listMaker = function(array) {
  if (array.length === 1) {
    return array[0];
  }

  var output = "";
  for (var index = 0; index < array.length - 1; index++) {
    output = output + `, ${array[index]}`;
  }

  return `${output} and ${array[array.length - 1]}`;
};
