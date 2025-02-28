// AND / && / both conditions must be true
let trueAndTrue = true && true; // true
let trueAndFalse = true && false; // false
let falseAndTrue = false && true; // false
let falseAndFalse = false && false; // false

// OR / || / either condition must be true
let trueOrTrue = true || true; // true
let trueOrFalse = true || false; // true
let falseOrTrue = false || true; // true
let falseOrFalse = false || false; // false

// NOT / ! / reverse the condition
let notTrue = !true; // false
let notFalse = !false; // true

// XOR / ^ / either condition must be true, but not both
let trueXorTrue = true ^ true; // false
let trueXorFalse = true ^ false; // true
let falseXorTrue = false ^ true; // true
let falseXorFalse = false ^ false; // false

// NOR / !|| / neither condition is true
let trueNorTrue = !(true || true); // false
let trueNorFalse = !(true || false); // false
let falseNorTrue = !(false || true); // false
let falseNorFalse = !(false || false); // true

// NAND / !&& / both conditions must be false
let trueNandTrue = !(true && true); // false
let trueNandFalse = !(true && false); // true
let falseNandTrue = !(false && true); // true
let falseNandFalse = !(false && false); // true

// XNOR / !^ / either condition must be false, but not both
let trueXnorTrue = !(true ^ true); // true
let trueXnorFalse = !(true ^ false); // false
let falseXnorTrue = !(false ^ true); // false
let falseXnorFalse = !(false ^ false); // true