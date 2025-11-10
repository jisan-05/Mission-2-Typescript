// ? : ternary operator : decision making
// ?? : nullish coalescing operator
// ?. optional chaining

const biyerJonnoEligible = (age: number) => {
  // if (age >= 21) {
  //   console.log("You are eligible");
  // }else{
  //   console.log("You are not eligible !")
  // }

  const result = age >= 21 ? "You are eligible" : "You are not eligible !";
  console.log(result);
};

biyerJonnoEligible(20);

//* ?? : nullish coalescing operator -- Only work for null/undefine

const userTheme = undefined;

const selectedTheme = userTheme ?? "Light Theme";

console.log(selectedTheme);

const isAuthenticate = null;

const resultWithTernary = isAuthenticate ? isAuthenticate : "You are guest";


//* ?. optional chaining
const user : {
  address:{
    city:string,
    town:string,
    postalCode?:string
  }
} ={
  address:{
    city:"Dhaka",
    town:"Banani"
  }
}

const postalCode = user.address?.postalCode;
console.log(postalCode)