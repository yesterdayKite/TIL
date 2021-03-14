// 1. use this for Vanila JJS
'use strict';

// 2. Variable
// let (added in ES6)
// 변수를 선언하는 '유일한' 방법.
// var 버리세요 제발! (선언하기도 전에 쓸 수 있는 미친 행동 할 수 있음.) var hoisting : 어디에 선언한것과 상관없이 맨 위로 끌어올려서 parsing함.


let name = 'yona';
console.log(name);
name = 'hello';
console.log(name);

// 3. block scope
// 블럭 밖에서, 블럭 안의 변수들을 조작/접근할 수 없다.
// 블럭이 없는 곳에 선언하면 global scope이다. (application의 시작과 끝까지 메모리에 적재됨.)

{
	let name = 'yona';
	console.log(name);
	name = 'hello';
	console.log(name);
}


// 4. const
// 가리키고 있는 포인터가 잠겨있기때문에, 선언함과 동시에 할당하며 앞으로 바뀌지 않는다.
// 반대로 바뀔 수 있는 data type 은 mutable 하다고 함.
// 그래서 const 는 immutable 하다고 한다.
// favor => 1. security 2. thread safety 3. reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;


// 5. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function (= function도 변수처럼 지원됨.)
// JS에서는 int, float, long ...등말고 number로 통일된다. 그조차도 let으로 선언하면 됨ㅎㅎ.. 대박

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);  //Infinity 출력
console.log(negativeInfinity); // -Infinity 출력
console(nAn); // NaN 출력

// bigInt (fairy new, don't use it yet. onlyl in chrome and fews..)
const bigInt = 12345345345234353434634524523413;

// string
const char = 'c';
const breadan = 'breadan';
const greeting = 'hello ' + breadan;
console.log(`value: ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${breadan}!`;
console.log(`value : ${helloBob}, type: ${typeof helloBob}`);


// boolean
// false:0, null, undefined, NaN, ''
// true : any other value

const test = 3 < 1; //false

// null
let nothing = null;
console.log(`value: ${nothing}, type : ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type : ${typeof x}`);


//symbol, ccreate unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3 === symbol4); // true



// 6. Dynamic typing : dynamically typed language
// 선언할때 어떤 타입인지 하지 않고, 런타임 도중 type이 바뀐다.

let text = 'hello';
// 권장되지 않고 , runtime error가 많이 나오기때문에 typescript가 나오게 되었다.
