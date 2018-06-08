// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  //console.log(cardNumber.substring(0, 2));
  /*console.log("cardNumber length: " + cardNumber.length);
  console.log("cardNumber(0, 6) " + cardNumber);
  console.log(cardNumber.length >= 16 && cardNumber.length <= 19 && 
        (
          (
            parseInt(cardNumber.substring(0, 6)) >= 622126 && parseInt(cardNumber.substring(0, 6)) <= 622925
          ) || 
          (
            parseInt(cardNumber.substring(0, 3)) >= 624 && parseInt(cardNumber.substring(0, 3)) <= 626
          ) || 
          (
            parseInt(cardNumber.substring(0, 4)) >= 6282 && parseInt(cardNumber.substring(0, 4)) <= 6288
          )
        )
      );*/
  if (cardNumber.length === 15 && (cardNumber.substring(0, 2) === "37" || cardNumber.substring(0, 2) === "34")) {
    //console.log("AE");
    return 'American Express';
  } else if (cardNumber.length === 14 && (cardNumber.substring(0, 2) === "38" || cardNumber.substring(0, 2) === "39")) {
    //console.log("DC");
    return 'Diner\'s Club';
  } else if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && cardNumber[0] === "4" && !(cardNumber.substring(0, 4) === "4903" || cardNumber.substring(0, 4) === "4905" || cardNumber.substring(0, 4) === "4911" || cardNumber.substring(0, 4) === "4936")) {
    //console.log("V");
    return 'Visa';
  } else if (cardNumber.length === 16 && cardNumber[0] === "5" && !(cardNumber.substring(0, 4) === "5018" || cardNumber.substring(0, 6) === "564182" || cardNumber.substring(0, 4) === "5020" || cardNumber.substring(0, 4) === "5038" || cardNumber.substring(0, 4) === "5893" || cardNumber.substring(0, 4) === "6304" || cardNumber.substring(0, 4) === "6759" || cardNumber.substring(0, 4) === "6761" || cardNumber.substring(0, 4) === "6762" || cardNumber.substring(0, 4) === "6763")) {
    //console.log("MC");
    return 'MasterCard';
  } else if ((cardNumber.length === 16 || cardNumber.length === 19) && (cardNumber.substring(0, 4) === "6011" || cardNumber.substring(0, 3) === "644" || cardNumber.substring(0, 3) === "645" || cardNumber.substring(0, 3) === "646" || cardNumber.substring(0, 3) === "647" || cardNumber.substring(0, 3) === "648" || cardNumber.substring(0, 3) === "649" || cardNumber.substring(0, 2) === "65")) {
    //console.log("D");
    return 'Discover';
  } else if (cardNumber.length >= 12 && cardNumber.length <= 19 && (cardNumber.substring(0, 4) === "5018" || cardNumber.substring(0, 4) === "5020" || cardNumber.substring(0, 4) === "5038" || cardNumber.substring(0, 4) === "5893" || cardNumber.substring(0, 4) === "6304" || cardNumber.substring(0, 4) === "6761" || cardNumber.substring(0, 4) === "6762" || cardNumber.substring(0, 4) === "6763")) {
    //console.log("M");
    return 'Maestro';
  } else if (
      cardNumber.length >= 16 && cardNumber.length <= 19 && 
        (
          (
            parseInt(cardNumber.substring(0, 6)) >= 622126 && parseInt(cardNumber.substring(0, 6)) <= 622925
          ) || 
          (
            parseInt(cardNumber.substring(0, 3)) >= 624 && parseInt(cardNumber.substring(0, 3)) <= 626
          ) || 
          (
            parseInt(cardNumber.substring(0, 4)) >= 6282 && parseInt(cardNumber.substring(0, 4)) <= 6288
          )
      )
    ) {
    //console.log("CUP");
    return 'China UnionPay';
  } else if ((cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) && (cardNumber.substring(0, 4) === "4903" || cardNumber.substring(0, 4) === "4905" || cardNumber.substring(0, 4) === "4911" || cardNumber.substring(0, 4) === "4936" || cardNumber.substring(0, 4) === "6333" || cardNumber.substring(0, 4) === "6759" || cardNumber.substring(0, 6) === "564182" || cardNumber.substring(0, 6) === "633110")) {
    //console.log("S");
    return "Switch";
  } else {
    //console.log("in, ")
    return 'improper number';
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
