import { Injectable, Inject } from '@angular/core';
import { CartItem, CartService, CART_ITEM_CLASS, CART_SERVICE_CONFIGURATION } from 'ng-shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class CustomCartService<T extends CartItem> extends CartService<T>  {
  getItem(id: any): T {
    throw new Error("Method not implemented.");
  }
  getItems(): T[] {
    throw new Error("Method not implemented.");
  }
  addItem(item: T): void {
    throw new Error("Method not implemented.");
  }
  removeItem(id: any): void {
    throw new Error("Method not implemented.");
  }
  itemCount(): number {
    throw new Error("Method not implemented.");
  }
  entries(): number {
    throw new Error("Method not implemented.");
  }
  cost(): number {
    throw new Error("Method not implemented.");
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  getShipping(): number {
    throw new Error("Method not implemented.");
  }
  setShipping(shipping: number): void {
    throw new Error("Method not implemented.");
  }
  getTaxRate(): number {
    throw new Error("Method not implemented.");
  }
  setTaxRate(tax: number): void {
    throw new Error("Method not implemented.");
  }
  constructor(@Inject(CART_ITEM_CLASS) itemClass: any, @Inject(CART_SERVICE_CONFIGURATION) configuration: any) {
    super(); // <-- Mandatory in all derived classes
    console.log(itemClass) // <-- The type of your cart items
    console.log(configuration) // <-- Your service configuration
  }
}
