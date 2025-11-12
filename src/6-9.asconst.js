// as const assertion
// enum UserRole {
//   Admin = 'Admin',
//   Editor = 'Editor',
//   Viewer = 'Viewer'
// }
var UserRole = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};
var canEdit = function (role) {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    }
    else {
        return false;
    }
};
var isEditPermissible = canEdit(UserRole.Admin);
console.log(isEditPermissible);
