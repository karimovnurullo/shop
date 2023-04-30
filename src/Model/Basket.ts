export class Basket {
   private id: number;
   constructor(public productId: string, public userId: number, public amount: number) { };

   getId() { return this.id; };
   setId(newID: number) { this.id = newID; };
   getProductId() { return this.productId; };
   setProductId(newProductId: string) { this.productId = newProductId; };
   getUserId() { return this.userId };
   setUserId(newID: number) { this.userId = newID; };
   getAmount() { return this.amount };
   setAmount(newAmount: number) { this.amount = newAmount };
}