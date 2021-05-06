/** 상호 간에 정의한 약속 혹은 규칙
 * - 객체의 스펙 (속성과 속성의 타입)
 * - 함수의 파라미터
 * - 함수의 스펙(파라미터, 반환 타입 등)
 * - 배열과 객체를 접근하는 방식
 * - 클래스
 */

let person = { nmae: 'yoon', age: 29 };

function user(obj: { age: number }) {
  console.log(`User: ${obj.age}`);
};

user(person);

// 옵션 속성
// ? 사용 할경우, 정의되어 있는 속성을 전부 사용하지 않아도 됨
interface CraftBeer1 {
  name: string;
  hop?: number;
}

let myBeer = {
  name: 'Saporo'
};

function brewBeer(beer: CraftBeer1) {
  console.log(`brewBeer: ${beer.name}`);
}
brewBeer(myBeer);

// 읽기 전용 속성
// 인터페이스로 객체를 처음 생성할 때만 값을 할당하고 그 이후에는 변경할 수 없는 속성을 의미
interface info {
  readonly brand: string;
}

let productInfo: info = {
  brand: 'yoondev'
};

// myBeer.brand = 'Korean Carpenter';

// 읽기 전용 배열
let readonlyArray: ReadonlyArray<number> = [1, 2, 3];
// arr.splice(0,1); // error
// arr.push(4); // error
// arr[0] = 100; // error
readonlyArray = [10, 20, 30];
console.log(`ReadonlyArray: ${readonlyArray}`);


// 객체 선언과 관련된 타입 체킹
interface Beer {
  brand?: string;
}

function checkBeer(beer: Beer) {
}

let beerInfo = { brandon: 'what' };
checkBeer(beerInfo as Beer);

// 함수 타입
// 반환 타입 정의
interface login {
  (username: string, password: string): boolean;
}

let loginUser: login;
loginUser = function (id: string, pw: string) {
  console.log('로그인 했습니다');
  return true;
}

// 클래스 타입
interface CraftBeer2 {
  beerName: string;
  nameBeer(beer: string): void;
}

class myBeerInfo implements CraftBeer2 {
  beerName: string = 'Baby Guinness';
  nameBeer(b: string) {
    this.beerName = b;
  }
  constructor() { }
}

// 인터페이스 확장
interface Person {
  name: string;
}
interface Address {
  city: string;
}
interface Developer extends Person, Address {
  skill: string;
}
let myInfo = {} as Developer;
myInfo.name = 'yoon';
myInfo.skill = 'TypeScript';
myInfo.city = 'Seoul';

// 하이브리드 타입
interface CraftBeer3 {
  (beer: string): string;
  brand: string;
  brew(): void;
}

function myBeer2(): CraftBeer3 {
  let my = (function (beer: string) { }) as CraftBeer3;
  my.brand = 'Beer Kitchen';
  my.brew = function () { };
  return my;
}

let brewedBeer = myBeer2();
brewedBeer('My First Beer');
brewedBeer.brand = 'Craft';
brewedBeer.brew();