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
