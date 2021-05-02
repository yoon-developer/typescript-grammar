/** 함수 타입 정의
 * - 함수의 파라미터(매개변수) 타입
 * - 함수의 반환 타입
 * - 함수의 구조 타입
 */

// 함수의 기본적인 타입 선언
function sum1(a: number, b: number): number {
  return a + b
}

console.log(`Sum: ${sum1(5, 10)}`);

// 함수의 인자
function sum2(a: number, b = 100): number {
  return a + b
}

console.log(`Sum: ${sum2(5, undefined)}`);

/**
 * error, too many parameters
 * sum(10, 20, 30);
 * 
 * error, too few parameters
 * sum(10);
 */


// REST 문법이 적용된 매개변수
function sum3(...nums: number[]): number {
  let sum = 0;
  console.log
  for (let value of nums) {
    sum += value;
  }
  return sum;
}

console.log(`Sum: ${sum3(10, 20, 30)}`);


// this
interface Vue {
  el: string;
  count: number;
  init(this: Vue): () => {};
}

let vm: Vue = {
  el: '#app',
  count: 10,
  init: function(this: Vue) {
    return () => {
      return this.count;
    }
  }
}

let getCount = vm.init();
let count = getCount();
console.log(`this: ${count}`);