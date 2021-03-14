// 1. String concatenation (+)
console.log('my'+'cat'); // my cat
console.log('1' + 2);  //12
console.log(`string literals : 1+2 = ${1+2}`); // 1+2 = 3


// 2. Numeric operators
// +, -, /, *, **, %


// 3. Increment and decrement operators
// ++, --


// 4. Assignment operaotors
// +=, -=, *=, /=


// 5. Comparsison operaotors
// <, <=, >, >=

// 6. Logical operaotors
// || , &&

/////////////////////////////////////////////////////////////////////////////


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
// ==== strict equality, no type conversion
console.log(stringFive === numberFive); // false



// object equality by reference
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2); // False. 레퍼런스 값이 다르다.
console.log(ellie1 === ellie2); // False. 레퍼런스 값이 다르다.
console.log(ellie1 == ellie3); // True. 레퍼런스 값이 같다.

// equality - puzzler
console.log(0 == false); // True
console.log(0 === false); // Fasle. 0은 booleantype이 아닌 number이기 때문.
console.log('' == false); // True
console.log('' === false); // Empty문자열은 boolea type이 아니기때문에
console.log(null == undefined); // True.
console.log(null === undefined); //  null 과 undefiend은 다른 타입


// 8. Conditional operators : if
// if, else if, else


// 9. Ternary operator : ?
// conditional ? value1 : value2;


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple typechecks in TS

const browser = 'IE';
switch (browser) {
	case 'IE' :
		console.log('go away!');
		break;
	case 'Chrome':
	case 'Firefox':
		console.log('love you');
		break;
	default:
		console.log('same all!');
		break;
}



//11. Loops
// while, do-while, for


//12. break, cotinue


