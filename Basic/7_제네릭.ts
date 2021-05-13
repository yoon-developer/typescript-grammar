function getText<T>(text: T): T {
    return text;
};

getText<string>('hi');
getText<number>(10);
getText<boolean>(true);

// 제네릭 타입 변수
// function logText<T>(text: T): T {
//     console.log(text.length); // Error: T doesn't have .length
//     return text;
// }
function logText<T>(text: T): T {
    return text;
}

let str1: <T>(text: T) => T = logText;
let str2: { <T>(text: T): T } = logText;


interface GenericLogTextFn {
    <T>(text: T): T;
}
let myString: GenericLogTextFn = logText;

// 제네릭 클래스
class GenericMath<T> {
    pi: T;
    sum: (x: T, y: T) => T;
}

let math = new GenericMath<number>();

// 제네릭 제약 조건
interface LengthWise {
    length: number;
}

function logText2<T extends LengthWise>(text: T): T {
    console.log(text.length);
    return text;
}
// logText2(10); // Error
logText2({ length: 0, value: 'hi' });

// 객체의 속성을 제약하는 방법
function getProperty<T, O extends keyof T>(obj: T, key: O) {
    return obj[key];
}
let obj = { a: 1, b: 2, c: 3 };

getProperty(obj, "a");
// getProperty(obj, "z"); // Error