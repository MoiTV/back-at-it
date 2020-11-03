"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.checkEmail = function (email) {
        var currentEmail = this.email;
        return email === currentEmail;
    };
    return User;
}());
exports.User = User;
var userOne = new User('moises', 'valdez', 'moisesvaldez@email.com');
console.log(userOne.checkEmail('msdsfdf'));
