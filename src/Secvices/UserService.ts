import { User } from '../Model/User';


export class UserService {
   private users: User[] = [];
   private idGenerator: number = 0;


   checkUsername(username: string) {
      for (const user of this.users) {
         if (user.getUsername() === username) return true;
      }
      return false;
   }

   add(newUser: User) {
      for (const user of this.users) {
         if (this.checkUsername(newUser.getUsername())) throw new Error(`${user.name} already exists`);
      }
      newUser.setId(++this.idGenerator);
      this.users.push(newUser);
      // this.users.push(`${this.idGenerator}. ${JSON.stringify(newUser)}`);
   }

   singIn(username: string, password: string): User {
      for (const user of this.users) {
         if (user.getUsername() == username && user.getPassword() == password) return user;
      }
      throw new Error(`User ${username} does not exist`)
   }
   signUp(name: string, username: string, password: string) {
      if (this.checkUsername(username)) {
         throw new Error(`User ${username} already exists`);
      }
      let user = new User(name, username, password, 1000000);
      this.add(user);
   }
   getUsersList() {
      return this.users;
   }

}