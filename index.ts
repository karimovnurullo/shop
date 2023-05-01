import { User } from './src/Model/User'; 
import { Laptop } from './src/Model/Products/laptop';
import { TV } from './src/Model/Products/TV';
import { Monitor } from './src/Model/Products/Monitor';
import { Phone } from './src/Model/Products/Phone';
import { Main } from './src/main';

const main = new Main();

const laptop1 = new Laptop("HP G850", 2000, "HP", 32, "Core i9 13 Gen", "RTX4090", 512);
const phone1 = new Phone("S20", 400, "Sumsung", 5000, 108);
const tv1 = new TV("Sumsung 2", 500, "Sumsung", 32, false, "Amoled");
const tv2 = new TV("Sumsung 2", 500, "Sumsung", 32, false, "Amoled");


main.addProducts(laptop1, phone1, tv1, tv2);

console.log(main.getProductsList());

// console.log(main.showProducts("Tv"));

main.signUp("Nurullo", "karimov_nurulloh", "root123");
main.signUp("Nurullo", "karimov_nurullo", "root123");


const user1 = new User("Nurullo", "nurullo", "root123", 11222);
const user2 = new User("Ronaldo", "cristiano", "cr7", 11222999999);
const user3 = new User("Amirxon", "abralov", "amirxon_2008", 19999);

main.addUsers(user1,user2,user3);
console.log("Users list: ",main.getUsersList());

// console.log("Admin :", main.checkAdmin(user3));




