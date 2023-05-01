import { Product } from "./Product";

export class Laptop extends Product {
   constructor(public name: string, public price: number, public manufacturer: string, public RAM: number, public CPU: string, public GPU: string, public memory: number) {
      super(name, price, manufacturer);
   };
   getRAM() {
      return this.RAM
   };
   setRAM(ram: number) {
      this.RAM = ram
   };

   getCPU() {
      return this.CPU
   };
   setCPU(cpu: string) {
      this.CPU = cpu
   };

   getGPU() {
      return this.GPU
   };
   setGPU(gpu: string) {
      this.GPU = gpu
   };

   getMemory() {
      return this.memory
   };
   setMemory(memory: number) {
      this.memory = memory
   };
}
