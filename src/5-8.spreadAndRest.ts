// spread operator

const friends = ["Jisan","Tanvir"]
const schoolFriends = ["Alif","Sohan"]
const collageFriends = ["Ayman","Rafid"]

friends.push(...schoolFriends)
friends.push(...collageFriends)

console.log(friends)

const user = {
  name:"Jisan",
  phone:"018392493"
}
const otherInfo = {
  hobby:"outing",
  favoriteColor: "Black"
}

const userInfo = {
  ...user,
  ...otherInfo
}

console.log(userInfo)

//  ---------- Rest Operator -----------

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend:string)=> console.log("Send Invitation to", friend))
}
sendInvite("pintu","cintu","Rintu","JIsan")
