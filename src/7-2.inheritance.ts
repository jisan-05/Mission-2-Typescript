class Parent {
  name: string; // common
  age: number; // common
  address: string; // common

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  // common
  getSleep(numberOfHours: number) {
    console.log(`${this.name} ${numberOfHours} gonta gumai`);
  }
}

class Student extends Parent {}

class ExtraStudentInfo extends Parent {
  rollNo: number;
  constructor(name: string, age: number, address: string, rollNo: number) {
    super(name, age, address);
    this.rollNo = rollNo;
  }
}

const ExtraStudent = new ExtraStudentInfo('Jisan',29,"gazipur",12)



const student1 = new Student("Mr.fakibaz", 29, "bangladesh");

student1.getSleep(15);

class Teacher extends Parent {
  designation: string; // extra property

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);

    this.designation = designation;
  }

  // own method
  takeClass(numberOfclass: number) {
    console.log(`${this.name} ${numberOfclass} gonta class nei`);
  }
}

const teacher1 = new Teacher("Mr. Smart T", 25, "Dhaka", "Senior Teacher");

teacher1.takeClass(10);
