/**
 * initial variables. shoppingCartObj is the array object with product Items to save in localstore
 * products list is the list of products.
 * cartItemAmount is the length of shoppingCartObj, useful to manipulate and check the shopping cart
 */
 const currency = "€";
 var shopingCartObj = null;
 var productsList = null;
 var cartItemAmount = -1;
 const deliveryCosts=15;
 const taxesBase=12;
 
 /**
  * custom classes Product amd Product Item, no real need for them, but code is more readable this way
  */

 class Product {
   constructor(id, title, description, image, price, category) {
     this.id = id;
     this.title = title;
     this.description = description;
     this.image = image;
     this.price = price;
     this.category = category;
   }
   createCard() {
     return cardTemplate(
       this.id,
       this.title,
       this.description,
       this.image,
       this.price
     );
   }
 }
 
 class ProductItem {
   constructor(product, quantity) {
     this.product = product;
     this.quantity = quantity;
   }
 }
 