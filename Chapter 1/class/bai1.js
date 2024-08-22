class Person{
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    getAddress(){
        return 'I live in '+this.address;
    }
}

const test = new Person('Hỏi anh Tùng',"Hưng Yên");
console.log("check test", test);
console.log(test.getAddress());