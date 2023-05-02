import { User } from './Model/User';
import { Product } from './Model/Products/Product';
import { TV } from './Model/Products/TV';
import { Laptop } from './Model/Products/laptop';
import { Monitor } from './Model/Products/Monitor';
import { Phone } from './Model/Products/Phone';
import { UserService } from './Secvices/UserService';
import { ProductService, ProductType } from './Secvices/ProductService';


export class Main {
   private userService = new UserService();
   private productService = new ProductService();

   addProducts(...newproducts: Product[]) {
      for (const product of newproducts) {
         this.productService.addProduct(product);
      }
   }
   addUsers(...newUsers: User[]) {
      for (const user of newUsers) {
         this.userService.add(user);
      }
   }
   getProductsList() {
      return this.productService.getProductsList();
   }
   getUsersList() {
      return this.userService.getUsersList();
   }
   showProducts(type: ProductType) {
      return this.productService.getProductsByType(type);
   }
   signUp(name: string, username: string, password: string) {
      this.userService.signUp(name, username, password)
   }
   checkAdmin(user: User) {
      return user.getUsername() === "admin";
   }
   singIn(username: string, password: string){
      return this.userService.singIn(username, password);
   }
}
