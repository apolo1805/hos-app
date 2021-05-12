
export default class UserModel {
    // #password; // password is a private property

    constructor(fname, lname, username, password) {
        this.fname = fname;
        this.lname = lname;
        this.username = username;
        this.password = password;
    }
}