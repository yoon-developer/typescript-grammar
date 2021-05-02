// String (문자열)
let str: string = 'hi';
console.log(`String: ${str}`);

// Number (숫자)
let num: number = 10;
console.log(`Number: ${num}`);

// Boolean (진위)
let isLoggendIn: boolean = false;
console.log(`Boolean: ${isLoggendIn}`);

// Object
let obj: object = {
    name: 'dyhin',
    age: 29
}
console.log(`Object: ${obj}`);


// Array (배열)
let arr1: number[] = [1, 2, 3];
console.log(`Array: ${arr1}`);
let arr2: Array<number> = [1, 2, 3];
console.log(`Array: ${arr2}`);

// Tuple (배열)
// 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식
let tp: [string, number] = ['hi', 10];
console.log(`Tuple: ${tp}`);

// Enum
// 특정 값(상수)들의 집합
enum Values {
    First,
    Second,
    Third = 'Third'
}
let count1: Values = Values.First;
console.log(`Enum: ${count1}`);
let count3: Values = Values.First;
console.log(`Enum: ${count3}`);

// Any
// 모든 타입에 대해서 허용
let s: any = 'hi';
let n: any = 10;
let a: any = ['a', 2, true];
console.log(`Any: ${s}`);
console.log(`Any: ${n}`);
console.log(`Any: ${a}`);

// Void
// 변수에는 undefined와 null만 할당하고, 함수에는 반환 값을 설정할 수 없는 타입
let unuseful: void = undefined;
console.log(`Void: ${unuseful}`);
function notuse(): void {
    console.log('Void: Notuse');
}
notuse()

// Never
// 함수의 끝에 절대 도달하지 않는다는 의미
function neverEnd(): never {
    while (true) {
  
    }
}
