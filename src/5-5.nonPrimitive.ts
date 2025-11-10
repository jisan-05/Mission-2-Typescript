// array, object

// ts - tuple

let bazarList: string[] = ["Apple", "Banana"];

// bazarList.push(12);

let mixedArr: (string | number)[] = ["eggs", 12, "milk", 1];

mixedArr.push("apple");
mixedArr.push(10);
// mixedArr.push(true)

// Tuple Example
let coordinates: [number, number] = [20, 30];

let couple: [string, string] = ["Husband", "Wife"];

let JisanNameAndRoll: [string, number] = ["Jisan", 10];
//! JisanNameAndRoll[0] = 23

// reference type : object

// const user: {
//   organization: "Programming hero"; // value => type: literal types
//   firstName: string;
//   middleName?: string; // optional type
//   lastName: string;
//   isMarried: boolean;
// } = {
//   organization:"Programming hero",
//   firstName: "Tanvir",
//   middleName : "Ahmed", // you can remove middleName cause I declare optional type
//   lastName: "Jisan",
//   isMarried: true,
// };

// user.organization = "Programming hero Fire"



const user: {
  readonly organization: string; // Access modifier
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization:"Programming hero",
  firstName: "Tanvir",
  middleName : "Ahmed", // you can remove middleName cause I declare optional type
  lastName: "Jisan",
  isMarried: true,
};

// user.organization = "Programming hero Fire" // you can not change cause its define as a readOnly

console.log(user)
