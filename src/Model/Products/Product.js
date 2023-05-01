"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price, manufacturer) {
        this.name = name;
        this.price = price;
        this.manufacturer = manufacturer;
    }
    ;
    Product.prototype.getManufacturer = function () {
        return this.manufacturer;
    };
    Product.prototype.setManufacturer = function (manufacturer) {
        this.manufacturer = manufacturer;
    };
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.setId = function (id) {
        this.id = id;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Product;
}());
exports.Product = Product;
