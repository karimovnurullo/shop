import { Product } from '../Model/Products/Product';

import { TV } from '../Model/Products/TV';
import { Phone } from '../Model/Products/Phone';
import { Monitor } from '../Model/Products/Monitor';
import { Laptop } from '../Model/Products/laptop';

export type ProductType = "Laptop" | "Monitor" | "Phone" | "TV";

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
      throw new Error("Product not found");
   }

   getProductsByType(type: ProductType): Product[] {
      let products: Product[] = [];
      switch (type) {
         case 'TV':
            for (const product of this.productList) {
               if (product instanceof TV) {
                  products.push(product);
               }
            }
            return products;
         case 'Laptop':
            for (const product of this.productList) {
               if (product instanceof Laptop) {
                  products.push(product);
               }
            }
            return products;
         case 'Monitor':
            for (const product of this.productList) {
               if (product instanceof Monitor) {
                  products.push(product);
               }
            }
            return products;
         case 'Phone':
            for (const product of this.productList) {
               if (product instanceof Phone) {
                  products.push(product);
               }
            }
            return products;
         default:
            console.log(`Invalid product type: ${type}`);
            return products;
      }
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