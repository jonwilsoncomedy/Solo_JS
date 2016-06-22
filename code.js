var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

// 1) Iterate through the stringList and produce the following output:
// Months listed are March, April, May.
//
// Create new array with "Months", "listed" and "are"
var newStringList = ["Months", "listed", "are"];
// iterate on stringList and add each month to newStringList
for( var i = 0; i < stringList.length; i++) {
// add a "," after March and April and a "." after May
  	if( i < (stringList.length - 1)) {
  		newStringList.push(stringList[i] + ",");
    } else {
      	newStringList.push(stringList[i] + ".");
    };
}
// concatenate the new array with spaces in between each element
console.log(newStringList.join(' '));

// 2) Console log the last element in numList using .length to find the last index
//
// Use numList.length - 1 to find index of the last element
// assign this index to numList and console log the element
console.log(numList[(numList.length - 1)]);


// 3) Iterate through numList, output all numbers as single String
//
// create an empty array to hold the string values of numList
var numString = [];
// turn each number to a string, creating an array or strings
for( var i = 0; i < numList.length; i++) {
  	numString.push(numList[i].toString());
};
// concatenate this new string array using .join
console.log(numString.join(''));



// 4) Iterate through numList and add all of the elements together and console log the total
//
// declare numeric variable set to '0' to hold our total
var numTotal = 0;
// add each number to numTotal, one at a time
for( var i = 0; i < numList.length; i++) {
  numTotal += numList[i];
}
console.log(numTotal);


// 5) If the second element in boolList is true, log the sum of the first and last elements in numList. Otherwise multiply the second element in numList by itself and log the result.
//
// boolList[(boolList.length - 1) is the last item in the array
if(boolList[1] === true) {
  console.log((boolList[0] + boolList[(boolList.length - 1)]));
} else {
  console.log((boolList[1] * boolList[1]));
};

// 6) Iterate through boolList, if the value is true console log the equivelent index in numList.
//
// check to see if each element is true, log the same index in numList
for (var i = 0; i < boolList.length; i++) {
  if(boolList[i] === true) {
    console.log(numList[i]);
  };
}

// 7) Combine all three arrays into one array, and log the newly created are in reverse.
//
// create a new array to hold the combined array
combinedArray = stringList.concat(numList, boolList);
// log the reverse order
console.log(combinedArray = combinedArray.reverse());

