"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var TV_1 = require("../Model/Products/TV");
var Phone_1 = require("../Model/Products/Phone");
var Monitor_1 = require("../Model/Products/Monitor");
var laptop_1 = require("../Model/Products/laptop");
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.idGenerator = 0;
        this.productList = [];
    }
    ProductService.prototype.addProduct = function () {
        var products = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            products[_i] = arguments[_i];
        }
        for (var _a = 0, products_1 = products; _a < products_1.length; _a++) {
            var mewproduct = products_1[_a];
            mewproduct.setId(++this.idGenerator);
            this.productList.push(mewproduct);
        }
    };
    ProductService.prototype.getById = function (id) {
        for (var _i = 0, _a = this.productList; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.getId() === id)
                return product;
        }
        throw new Error("ID not found");
    };
    //    getProductsByType(type: string): Product[] {
    //       let products: Product[] = [];
    //       switch (type.toLowerCase()) {
    //           case 'tv':
    //               for (const product of this.productList) {
    //                   if (product instanceof TV) {
    //                       products.push(product);
    //                   }
    //               }
    //               break;
    //           case 'laptop':
    //               for (const product of this.productList) {
    //                   if (product instanceof Laptop) {
    //                       products.push(product);
    //                   }
    //               }
    //               break;
    //           case 'monitor':
    //               for (const product of this.productList) {
    //                   if (product instanceof Monitor) {
    //                       products.push(product);
    //                   }
    //               }
    //               break;
    //           case 'phone':
    //               for (const product of this.productList) {
    //                   if (product instanceof Phone) {
    //                       products.push(product);
    //                   }
    //               }
    //               break;
    //           default:
    //               console.log(`Invalid product type: ${type}`);
    //               break;
    //       }
    //       return products;
    //   }
    ProductService.prototype.getProductsByType = function (type) {
        var products = [];
        switch (type.toLowerCase()) {
            case 'tv':
                for (var _i = 0, _a = this.productList; _i < _a.length; _i++) {
                    var product = _a[_i];
                    if (product instanceof TV_1.TV) {
                        products.push(product);
                    }
                }
                break;
            case 'laptop':
                for (var _b = 0, _c = this.productList; _b < _c.length; _b++) {
                    var product = _c[_b];
                    if (product instanceof laptop_1.Laptop) {
                        products.push(product);
                    }
                }
                break;
            case 'monitor':
                for (var _d = 0, _e = this.productList; _d < _e.length; _d++) {
                    var product = _e[_d];
                    if (product instanceof Monitor_1.Monitor) {
                        products.push(product);
                    }
                }
                break;
            case 'phone':
                for (var _f = 0, _g = this.productList; _f < _g.length; _f++) {
                    var product = _g[_f];
                    if (product instanceof Phone_1.Phone) {
                        products.push(product);
                    }
                }
                break;
            default:
                console.log("Invalid product type: ".concat(type));
                break;
        }
        return products;
    };
    ProductService.prototype.edit = function (updatedProduct) {
        for (var i = 0; i < this.productList.length; i++) {
            if (this.productList[i].getId() === updatedProduct.getId()) {
                this.productList[i] = updatedProduct;
                return 1;
            }
        }
        return -1;
    };
    ProductService.prototype.getProductsList = function () {
        return this.productList;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
