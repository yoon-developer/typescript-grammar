
class DevData {
    readonly name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
let yoon = new DevData("yoon");
// john.name = "yoon2"; // error! name is readonly.

// Accessor
// 객체의 특정 속성의 접근과 할당에 대해 제어
class DevData2 {
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(newValue: string) {
        if (newValue && newValue.length > 5) {
            throw new Error('이름이 너무 깁니다');
        }
        this._name = newValue;
    }
}
const josh = new DevData2();

//   josh.name = 'Shin Dong Yoon'; // Error
josh.name = 'Yoon';

// Abstract Class
abstract class DevData3 {
    abstract coding(): void;
    drink(): void {
        console.log('drink sth');
    }
}

class BackEndDeveloper extends DevData3 {
    coding(): void {
        // Developer 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드
        console.log('develop web');
    }
    design(): void {
        console.log('design web');
    }
}
// const dev = new DevData3(); / error
const yoondev = new BackEndDeveloper();
yoondev.coding(); // develop web
yoondev.drink(); // drink sth
yoondev.design(); // design web