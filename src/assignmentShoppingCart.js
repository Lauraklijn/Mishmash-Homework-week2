module.exports = class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity, price) {
    const newItem = { product: product, quantity: quantity, price: price };
    return this.items.push(newItem);
    //this.balance = this.balance + price; // added balance bij toevoegen item
  }
  clear() {
    this.items = [];
  }

  total() {
    return this.items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
  }
};

const cart = new ShoppingCart();
//console.log(cart);
// toevoegen items
//cart.addItem("Jurk", 1, 50);
cart.addItem("schoenen", 1, 50);
const addedItems = cart.items;
console.log(addedItems);

// Leeghalen winkelmandje
cart.clear();
const emtycart = cart.items;
//console.log(emtycart);

// Totale waarde van de items
cart.total();
const totalAmount = cart.items;
console.log("Total amount", totalAmount);

//module.exports = { ShoppingCart };
