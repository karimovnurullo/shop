import { Product } from '../Model/Products/Product';

import { TV } from '../Model/Products/TV';
import { Phone } from '../Model/Products/Phone';
import { Monitor } from '../Model/Products/Monitor';
import { Laptop } from '../Model/Products/laptop';

type ProductType = Laptop | Monitor | Phone | TV;

export class ProductService {
   private idGenerator: number = 0;
   private productList: Product[] = [];

   addProduct(...products: Product[]) {
      for (const mewproduct of products) {
         mewproduct.setId(++this.idGenerator);
         this.productList.push(mewproduct);
      }
   }
   getById(id: number): Product {
      for (const product of this.productList) {
         if (product.getId() === id) return product;
      }
      throw new Error("ID not found");
   }

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
   getProductsByType(type: string): Product[] {
      let products: Product[] = [];
      switch (type.toLowerCase()) {
         case 'tv':
            for (const product of this.productList) {
               if (product instanceof TV) {
                  products.push(product);
               }
            }
            break;
         case 'laptop':
            for (const product of this.productList) {
               if (product instanceof Laptop) {
                  products.push(product);
               }
            }
            break;
         case 'monitor':
            for (const product of this.productList) {
               if (product instanceof Monitor) {
                  products.push(product);
               }
            }
            break;
         case 'phone':
            for (const product of this.productList) {
               if (product instanceof Phone) {
                  products.push(product);
               }
            }
            break;
         default:
            console.log(`Invalid product type: ${type}`);
            break;
      }
      return products;
   }


   edit(updatedProduct: Product) {
      for (let i = 0; i < this.productList.length; i++) {
         if (this.productList[i].getId() === updatedProduct.getId()) {
            this.productList[i] = updatedProduct;
            return 1;
         }
      }
      return -1;
   }
   getProductsList() {
      return this.productList;
   }
}