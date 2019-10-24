module.exports = function Cart(nCart) {
  this.items = nCart.items || {};
  this.totalQty = nCart.totalQty || 0;
  this.totalPrice = nCart.totalPrice || 0;
  this.add = function(item, id) {
      let keptItem = this.items[id];
      if (!keptItem) {
          keptItem = this.items[id] = {
              item: item,
              qty: 0,
              price: 0
          };
      }
      keptItem.qty++;
      keptItem.price = keptItem.item.price * keptItem.qty;
      this.totalQty++;
      this.totalPrice += keptItem.item.price;
  };
  this.reduceByOne = function(id) {
      this.items[id].qty--;
      this.items[id].price -= this.items[id].item.price;
      this.totalQty--;
      this.totalPrice -= this.items[id].item.price;
      if (this.items[id].qty <= 0) {
          delete this.items[id];
      }
  };
  this.removeItem = function(id) {
      this.totalQty -= this.items[id].qty;
      this.totalPrice -= this.items[id].price;
      delete this.items[id];
  };
  this.generateArray = function() {
      let arr = [];
      for (let id in this.items) {
          arr.push(this.items[id]);
      }
      return arr;
  };
};