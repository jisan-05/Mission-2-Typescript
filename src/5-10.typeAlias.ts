// ------- Type Alias --------->
type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
}


const user1: User = {
  id: 123,
  name: {
    firstName: "Tanvir",
    lastName: "Ahmed",
  },
  gender: "male",
  contactNo: "01777",
  address: {
    division: "chatto",
    city: "Chattogram",
  },
};


const user2: User= {
  id: 123,
  name: {
    firstName: "Alif",
    lastName: "hasan",
  },
  gender: "male",
  contactNo: "01854564654",
  address: {
    division: "dhaka",
    city: "dhaka",
  },
};


type IsAdmin = true;
const isAdmin: IsAdmin = true;

type Name = string 

const myName : Name = 'stdsfsd'

// function 

type AddFunc = (num1:number,num2:number) => number

const add:AddFunc = (num1,num2) => num1 + num2;
