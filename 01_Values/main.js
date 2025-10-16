//--------------------------------------------NUMBERS--------------------------------------------//
/* 
64 bits of storage is used to store a single number.
Fractional numbers are written using a dot.
Scientific notation for very big or very small numbers.
example 2.998e8.
Treat fractional numbers as approximations rather than precise numbers.
*/
//--------------------------------------------ARITHMATIC--------------------------------------------//
/* PRECEDENCE*/
/*
When operators appear together without parentheses, the order in which they are applied is determined by the precedence of the operators. The example shows that multiplication comes before addition. The / operator has the same precedence as *. Likewise, + and - have the same precedence. When multiple operators with the same precedence appear next to each other, as in 1 - 2 + 1, they are applied left to right: (1 - 2) + 1.
*/
// % is used for remainder operation
//--------------------------------------------SPECIAL::NUMBERS--------------------------------------------//
/*
These are considered numbers but don't behave like normal numbers
they are;
    - Infinity
    + Infinity
    NaN       (not a number)

*/
//--------------------------------------------STRINGS--------------------------------------------//
//16 bits per string element.
/*
`Down on the sea`
"Lie on the ocean"
'Float on the ocean'
You can use single quotes, double quotes, or backticks to mark strings, as long as the quotes at the start and the end of the string match.
!Newlines (the characters you get when you press enter) can be included only when the string is quoted with backticks (`).

`half of 100 is ${100 / 2}`
!When you write something inside ${} in a template literal, its result will be computed, converted to a string, and included at that position. This example produces the string "half of 100 is 50".
*/
//--------------------------------------------UNARY::OPERATORS--------------------------------------------//
/*
The other operators shown so far in this chapter all operated on two values, but typeof takes only one. Operators that use two values are called binary operators, while those that take one are called unary operators. The minus operator (-) can be used both as a binary operator and as a unary operator. 
*/
/*
!Other similar operators are >= (greater than or equal to), <= (less than or equal to), == (equal to), and != (not equal to). 
There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”).

console.log(NaN == NaN)
// → false
!NaN is supposed to denote the result of a nonsensical computation, and as such, it isn’t equal to the result of any other nonsensical computations.
*/

//--------------------------------------------LOGICAL::OPERATORS--------------------------------------------//
/*
The && operator represents logical and. It is a binary operator, and its result is true only if both the values given to it are true.

console.log(true && false)
// → false
console.log(true && true)
// → true
The || operator denotes logical or. It produces true if either of the values given to it is true.

console.log(false || true)
// → true
console.log(false || false)
// → false
!Not is written as an exclamation mark (!). It is a unary operator that flips the value given to it—!true produces false and !false gives true.
!|| has the lowest precedence, then comes &&, then the comparison operators (>, ==, and so on), and then the rest.
*/

//--------------------------------------------EMPTY::VALUES--------------------------------------------//
