import { User } from './src/Model/User';
import { Laptop } from './src/Model/Products/laptop';
import { TV } from './src/Model/Products/TV';
import { Monitor } from './src/Model/Products/Monitor';
import { Phone } from './src/Model/Products/Phone';
import { Main } from './src/main';

const main = new Main();

const laptop1 = new Laptop("HP G850", 2000, "HP", 32, "Core i9 13 Gen", "RTX4090", 512);
const laptop2 = new Laptop("Macbook m1 pro", 1300, "Apple", 8, "M1", "GPU", 256);
const laptop3 = new Laptop("Acer aspire 3", 550, "Acer", 12, "Core i3 10 Gen", "Geforce mx330", 1256);
const phone1 = new Phone("S20", 400, "Sumsung", 5000, 108);
const phone2 = new Phone("Iphone 14", 1100, "Apple", 3000, 13);
const phone3 = new Phone("Xiaomi 13 pro", 700, "Xiaomi", 5000, 200);
const tv1 = new TV("Sumsung 2", 500, "Sumsung", 32, false, "Amoled");
const tv2 = new TV("Sumsung 2", 500, "Sumsung", 32, false, "Amoled");
const monitor1 = new Monitor("Asus monitor", 300, "Asus", 32, 144);
const monitor2 = new Monitor("Asus monitor", 300, "Asus", 27, 320);
const monitor3 = new Monitor("Монитор Xiaomi Mi Curved Gaming 34", 700, "Xiaomi", 34, 65);
const monitor4 = new Monitor("Monitor Lg", 300, "LG", 27, 75);
const monitor5 = new Monitor("Monitor Sumsung", 400, "Sumsung", 27, 75);


main.addProducts(phone2, monitor1, laptop1, monitor4, phone1, monitor2,laptop2, phone3, tv2, monitor3, tv1, laptop3, monitor5);

// console.log(main.getProductsList());

console.log(main.showProducts("Laptop"));

main.signUp("Nurullo", "karimov_nurulloh", "root123");
main.signUp("Nurullo", "karimov_nurullo", "root321");


const user1 = new User("Nurullo", "nurullo", "root123", 11222);
const user2 = new User("Ronaldo", "cristiano", "cr7", 11222999999);
const user3 = new User("Amirxon", "abralov", "amirxon_2008", 19999);

main.addUsers(user1, user2, user3);



// console.log("Users list: ", main.getUsersList());

// console.log("Admin :", main.checkAdmin(user3));

// console.log("Login User: ", main.singIn("karimov_nurullo", "root321"));




