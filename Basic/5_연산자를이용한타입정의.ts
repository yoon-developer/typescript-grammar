/** Union Type
 * 자바스크립트의 OR 연산자(||)와 같이 A이거나 B이다 라는 의미
 */

function logText(text: string | number) {
}

// Union Type의 장점
// any를 사용하는 경우
function getAge1(age: any) {
    age.toFixe(); // Error
    return age;
}

// 유니온 타입을 사용하는 경우
function getAge2(age: number | string) {
    if (typeof age === 'number') {
        age.toFixed();
        return age;
    } else if (typeof age === 'string') {
        return age;
    }
    return new TypeError('age must be number or string');
}

// Intersection Type
// & 연산자를 이용해 여러 개의 타입 정의를 하나로 합치는 방식
interface Person {
    name: string;
    age: number;
}
interface Dev {
    name: string;
    skill: number;
}
type Yoon = Person & Dev;

// Union Type을 쓸 때 주의할 점
interface UserData {
    name: string;
    age: number;
}
interface DeveloperData {
    name: string;
    skill: string;
}
function introduce(someone: UserData | DeveloperData) {
    someone.name;
    // someone.age; // Type Error
    // someone.skill; // Type Error
}