// union  |

type UserRole = "admin" | 'user' 

const getDashboard = (role: UserRole) =>{
  if(role === 'admin'){
    return "Admin Dashboard"
  }else if ( role === 'user'){
    return "User Dashboard"
  }else{
    return "guest dashboard"
  }
}


getDashboard('user')

// intersection & 
type Employee = {
  id:string,
  name:string,
  phoneNo:string
}

type Manager = {
  designation:string;
  teamSize:number
}

type EmployeeManager = Employee & Manager

const ChowduryShaheb : EmployeeManager = {
  id:'123',
  name:"Chowdory",
  phoneNo:'1234567',
  designation:'Manager',
  teamSize:12

}