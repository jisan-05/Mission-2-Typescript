// oop : instance of type guard / type narrowing

class Person {
  name:string;

  constructor(name:string){
    this.name=name;

  }

  getSleep(numOfhours:number){
    console.log(`${this.name} doinik ${numOfhours} ghonta Gumai`);
  }

}

class Student extends Person{
  constructor(name:string){
    super(name)
  }

  doStudy(numOfHours:number){
    console.log(`${this.name} doinik ${numOfHours} ghonta pore `);
  }

}

class Teacher extends Person{
  constructor(name:string){
    super(name)
  }

  takeClass(numOfHours:number){
    console.log(`${this.name} doinik ${numOfHours} ghonta Class nei `);
  }

}

// function guard

const isStudent = (user: Person) =>{
  return user instanceof Student; //  user is Student
}

const isTeacher = (user:Person) =>{
  return user instanceof Teacher; //  user is Teacher
}   


// const getUserInfo = (user:Person) =>{
//     if(user instanceof Student){
//       user.doStudy(10)
//     }else if (user instanceof Teacher){
//       user.takeClass(5)
//     }else{
//       user.getSleep(12)
//     }
// }
const getUserInfo = (user:Person) =>{
    if(isStudent(user)){
      user.doStudy(10)
    }else if (isTeacher(user)){
      user.takeClass(5)
    }else{
      user.getSleep(12)
    }
}
 
const student1 = new Student("Mr. student")
const teacher1 = new Teacher('Mr. Teacher')
const person1 = new Person('Mr. Person')

getUserInfo(student1)