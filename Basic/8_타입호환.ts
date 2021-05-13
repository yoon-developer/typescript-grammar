/**
 * 타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지를 의미
 */

interface Ironman {
    name: string;
}

class Avengers {
    name: string;
}

let i: Ironman;
i = new Avengers();

// 구조적 타이핑 예시
interface Avengers {
    name: string;
}

let hero: Avengers;

let capt = { name: "Captain", location: "Pangyo" };
hero = capt;

function assemble(a: Avengers) {
    console.log("어벤져스 모여라", a.name);
}

assemble(capt);

// Enum 타입 호환 주의 사항
// 타입끼리는 호환되지 않음
enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let status2 = Status.Ready;
// status2 = Color.Green;  // Error

// Class 타입 호환 주의 사항
// 클래스 타입끼리 비교할 때 스태틱 멤버(static member)와 생성자(constructor)를 제외하고 속성만 비교
class Hulk {
    handSize: number;
    constructor(name: string, numHand: number) { }
}

class Captain {
    handSize: number;
    constructor(numHand: number) { }
}

let a: Hulk;
let s: Captain;

// Generics
interface Empty<T> {
}
let x1: Empty<number>;
let y1: Empty<string>;

x1 = y1;

interface NotEmpty<T> {
    data: T;
}
let x2: NotEmpty<number>;
let y2: NotEmpty<string>;

// x2 = y2;  // Error