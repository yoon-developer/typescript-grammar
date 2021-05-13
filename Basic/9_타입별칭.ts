type MyName = string;
const name2: MyName = 'yoon';

type Developer = {
    name: string;
    skill: string;
}

// 타입 별칭에 제네릭도 사용 가능
type User<T> = {
    name: T
}

/** type vs interface
 * - 타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능 / 불가능 여부
 *   > 인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가
 */