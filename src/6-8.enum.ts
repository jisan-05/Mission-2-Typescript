// enum 

// set of fixed string lateral eak jaigai rakhe

// type UserRole = 'Admin' | 'Editor' | "Viewer";
enum UserRole {
  Admin = 'Admin',
  Editor = 'Editor',
  Viewer = 'Viewer'
}

const canEdit = (role:UserRole) =>{
  if(role === UserRole.Admin || role === UserRole.Editor){
    return true;
  }else{
    return false;
  }
} 

const isEditPermissible = canEdit(UserRole.Admin)

console.log(isEditPermissible);