// as const assertion

// enum UserRole {
//   Admin = 'Admin',
//   Editor = 'Editor',
//   Viewer = 'Viewer'
// }

const UserRole = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;


/*
{
  readonly Admin: "Admin",
  readonly Editor: "Editor",
  readonly Viewer: "Viewer",

1. typeof perator
2. keyof operator 

const user= {
 id: 222,
 name:'Mezba'
}

user['id'] >>> 222


typeof user;

{
id: number;
name:string
}

typeof UserRoles

{
 Admin: 'Admin';
 Editor: "Editor",
 Viewer: "Viewer",
}

keyof typeof UserRoles
'Admin'| 'Editor' | 'Viewer'

'ADMIN' |'EDITOR |'VIEWER'

UserRoles['Admin']  >>> 'ADMIN'
  typeof UserRoles[keyof typeof UserRoles]


}
*/



const canEdit = (role: (typeof UserRole)[keyof typeof UserRole]) => {
  if (role === UserRole.Admin || role === UserRole.Editor) {
    return true;
  } else {
    return false;
  }
};

const isEditPermissible = canEdit(UserRole.Admin);

console.log(isEditPermissible);
