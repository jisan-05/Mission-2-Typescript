// object destructuring


const user = {
  id:123,
  name: {
    firstName:"Tanvir",
    middleName:"Ahmed",
    lastName: "Jisan"
  },
  gender:"Male",
  favoriteColor:"Black"
}

const {favoriteColor:myFavColor, name:{middleName : myMiddleName}} = user;

// console.log(myFavColor,myMiddleName)


// array destructuring

const friends = ["karim","rahim","Mahim"]

const [ ,MyBestFriend,C] = friends

console.log(MyBestFriend)