import { Product } from './Product';
export class TV extends Product {

   constructor(public name: string, public price: number, public manufacturer: string, public displaySize: number, public isSmart: boolean, public displayType: string) {
      super(name, price, manufacturer);
   };

   getDisplaySize() {
      return this.displaySize;
   }
   setDisplaySize(displaySize: number) {
      this.displaySize = displaySize;
   }

   getIsSmart() {
      return this.isSmart;
   }
   setIsSmart(isSmart: boolean) {
      this.isSmart = isSmart;
   }
   getDisplayType() {
      return this.displayType;
   }
   setDisplayType(displayType: string) {
      this.displayType = displayType;
   }
}