
export default class UserModel {
    #password; // password is a private property

    constructor(plainUser) {
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.username = plainUser.username;
        this.#password = plainUser.password;
    }

    login(usr, pwd) {
        return usr.toLowerCase() === this.username.toLowerCase() && pwd === this.#password;
    }
}