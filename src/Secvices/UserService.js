"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var User_1 = require("../Model/User");
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [];
        this.idGenerator = 0;
    }
    UserService.prototype.checkUsername = function (username) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.getUsername() === username)
                return true;
        }
        return false;
    };
    UserService.prototype.add = function (newUser) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (this.checkUsername(newUser.getUsername()))
                throw new Error("".concat(user.name, " already exists"));
        }
        newUser.setId(++this.idGenerator);
        this.users.push(newUser);
    };
    UserService.prototype.singIn = function (username, password) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.getUsername() == username && user.getPassword() == password)
                return user;
        }
        throw new Error("User ".concat(username, " does not exist"));
    };
    UserService.prototype.signUp = function (name, username, password) {
        if (this.checkUsername(username)) {
            throw new Error("User ".concat(username, " already exists"));
        }
        var user = new User_1.User(name, username, password, 1000000);
        this.add(user);
    };
    UserService.prototype.getUsersList = function () {
        return "".concat(this.idGenerator++, ":") + this.users;
    };
    return UserService;
}());
exports.UserService = UserService;
