
export default class UserModel {
    #password; // password is a private property

    constructor(plainUser) {
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.username = plainUser.username;
        this.#password = plainUser.password;
        this.street = plainUser.street;
        this.city = plainUser.city;
        this.isCommittee = plainUser.isCommittee;
    }

    login(usr, pwd) {
        return usr.toLowerCase() === this.username.toLowerCase() && pwd === this.#password;
    }
}