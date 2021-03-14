// 1. Function declaration
// function name(param1, param2) {body... return;}
// one function === one thing
// naming : doSometing, command, verb
// e.g. CreateCardAndPoint -> createCard, createpoint
// function is OBJECT in JS!!!




// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
	console.log(`${message} by ${from}`);
}
showMessage('HI!'); // Hi! unknown 출력



// 4. Rest parameters (added in ES6)
function parintAll(...args){ //배열형태로 전달
	for (let i = 0; i< args.length ; i++)
		console.log(args[i]);

	for (const arg of args){ // 이것도 위와 같은 결과이다.
		console.log(arg);
	}

	args.forEach((arg) => console.log(arg));

}
parintAll('dream', 'coding', 'ellie');


// 5. Local scope
// " 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다. "
let globalMessage = 'global'; // global variable
function printMessage(){
	let message = 'hello';
	console.log('Hello');
}
