/**
 * 특정 값들의 집합
 */

// 숫자형 이넘
/**
 * - 초기 값을 주면 초기 값부터 차례로 1씩 증가
 * - 초기 값을 주지 않으면 0부터 차례로 1씩 증가
 * - 만약 이넘 값에 다른 이넘 타입의 값을 사용하면, 선언하는 이넘의 첫 번째 값을 초기화
 */

enum Res {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Res): void {
}

respond("yoon", Res.Yes);

// 문자형 이넘
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// 복합 이넘
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

// 런타임 시점에서의 이넘 특징
enum E {
    X, Y, Z
}

function getX(obj: { X: number }) {
    return obj.X;
}
getX(E);

// 컴파일 시점에서의 이넘 특징
enum LogLevel {
    ERROR, WARN, INFO, DEBUG
}

// 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log('Log level key is: ', key);
        console.log('Log level value is: ', num);
        console.log('Log level message is: ', message);
    }
}
printImportant('ERROR', 'This is a message');

// 리버스 매핑
// 숫자형 이넘에만 존재하는 특징

enum Enum {
    A
}
let key = Enum.A;
let keyName = Enum[key];