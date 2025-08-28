const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    category: "electronics",
    inStock: true,
  },
  { id: 2, name: "Phone", price: 800, category: "electronics", inStock: false },
  { id: 3, name: "T-shirt", price: 20, category: "clothing", inStock: true },
  { id: 4, name: "Shoes", price: 50, category: "clothing", inStock: false },
  { id: 5, name: "Watch", price: 200, category: "accessories", inStock: true },
];

const priceList = products.map((p) => {
  return p.price;
});
console.log(priceList);

const availableProducts = products.filter((p) => p.inStock);
console.log(availableProducts);

const expensiveProducts = products.filter((p) => p.price > 500);
console.log(expensiveProducts);

const productsTotalPrice = products.reduce((acc, p) => acc + p.price, 0);
console.log(productsTotalPrice);

const totalAvailableProducts = products.reduce(
  (acc, p) => (p.inStock ? acc + p.price : acc),
  0
);
console.log(totalAvailableProducts);

function tva(price, tva) {
  let t = price + (price * tva) / 100;
  return t;
}
function remise(price, sold) {
  let r = price - (price * sold) / 100;
  return r;
}
function greetings(name) {
  console.log("Hello", name, "!");
}
// ==========================================================================================================
products.forEach((element) => {
  let a = tva(element.price, 15);
  console.log(a);
});
products.forEach((element) => {
  let a = remise(element.price, 15);
  console.log(a);
});
productsremise = products.map(
  remise(p.price , 15)
)