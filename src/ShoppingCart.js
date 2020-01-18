class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(product, quantity, price) {
    const getItem = { product: product, quantity: quantity, price: price };
    return this.items.push(getItem);
  }
  clear() {
    return (this.items = []);
  }

  total() {
    return this.items.reduce((total, currentItem) => {
      return total + currentItem.price * currentItem.quantity;
    }, 0);
  }
}

const cart = new ShoppingCart();
//console.log(cart);

cart.getItems();
// add items Shoppingcart
cart.addItem("jurk", 1, 50);

cart.addItem("schoenen", 1, 50);
const addedItems = cart.items;
console.log(addedItems);

// Clear Shoppingchart
cart.clear();
const emtycart = cart.items;
console.log(emtycart);

// Total value in ShoppingCart
cart.total();
const totalAmount = cart.items;
console.log("Total amount", totalAmount);

module.exports = ShoppingCart;
