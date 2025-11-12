// constrain : strict rules deya 

type Student = {id:number; name:string}
// interface Student {id:number; name:string}

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Mezba",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};
const student3 = {
  id:1,
  name:"Jisan"
}

const result = addStudentToCourse(student3);
console.log(result);