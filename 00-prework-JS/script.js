const products = [
  {
    name: "banan",
    price: 4.99,
  },
  {
    name: "chleb",
    price: 3.25,
  },
  {
    name: "ser",
    price: 7.0,
  },
  {
    name: "baton",
    price: 1.99,
  },
];

let sum = 0;
//Za pomocą JS oblicz średnią cenę produktu oraz jego sumę produktow w koszyku.

// const result =

products.forEach((product) => {
  sum = sum + product.price;
});

console.log(sum);
console.log("suma produktów to:" + sum);

const average = sum / products.length;
console.log("średnia:" + average);
console.log(sum);
