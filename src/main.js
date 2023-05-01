"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var UserService_1 = require("./Secvices/UserService");
var ProductService_1 = require("./Secvices/ProductService");
var Main = /** @class */ (function () {
    function Main() {
        this.userService = new UserService_1.UserService();
        this.productService = new ProductService_1.ProductService();
    }
    Main.prototype.addProducts = function () {
        var newproducts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newproducts[_i] = arguments[_i];
        }
        for (var _a = 0, newproducts_1 = newproducts; _a < newproducts_1.length; _a++) {
            var product = newproducts_1[_a];
            this.productService.addProduct(product);
        }
    };
    Main.prototype.addUsers = function () {
        var newUsers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newUsers[_i] = arguments[_i];
        }
        for (var _a = 0, newUsers_1 = newUsers; _a < newUsers_1.length; _a++) {
            var user = newUsers_1[_a];
            this.userService.add(user);
        }
    };
    Main.prototype.getProductsList = function () {
        return this.productService.getProductsList();
    };
    Main.prototype.getUsersList = function () {
        return this.userService.getUsersList();
    };
    Main.prototype.showProducts = function (type) {
        return this.productService.getProductsByType(type);
    };
    Main.prototype.signUp = function (name, username, password) {
        this.userService.signUp(name, username, password);
    };
    Main.prototype.checkAdmin = function (user) {
        return user.getUsername() === "admin";
    };
    return Main;
}());
exports.Main = Main;
