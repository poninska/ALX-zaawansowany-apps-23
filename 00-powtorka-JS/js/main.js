console.log("hello");

const people = [
  {
    name: "Michał",
    age: 12,
  },
  {
    name: "Damian",
    age: 10,
  },
  {
    name: "Wiktoria",
    age: 14,
  },
  {
    name: "Agata",
    age: 8,
  },
];

console.log(people);

let max = people[0];

const findMax = () => {
  for (let i = 0; i < people.length; i++) {
    if (people[i].age > max.age) {
      max = people[i];
    }
  }
  return max;
};

max = findMax();

console.log(max.name);

//z 1.
const names = ["Damian", "Pawel", "Michal"];

names.push("kasia");
console.log(names[names.length - 1]);

// 2. Majac obiekt buta, sprawdz czy rozmiar jest wiekszy od 42. Jesli jest, to wypisz w konsoli "To jest duzy but"

const shoe50 = {
  brand: "nike",
  color: "white",
  size: 40,
};

if (shoe50.size > 42) {
  console.log("to jest duży but");
} else {
  console.log("mały but");
}

// 3. Majac tablice produktów, oblicz sumę produktów, których kategoria to owoce

const products = [
  {
    name: "jablko",
    category: "fruits",
    price: 2.0,
  },
  {
    name: "kawa",
    category: "other",
    price: 7.25,
  },
  {
    name: "banan",
    category: "fruits",
    price: 4.99,
  },
];

let sumFruits = 0;

for (let product of products) {
  if (product.category === "fruits") sumFruits = sumFruits + product.price;
}
console.log("zad 3=" + sumFruits);

// 4. Napisz funkcje sumProducts, ktora przyjmie tablice obiektow products z zadania 3, a nastepnie zwroci sume wszystkich produktow

let sumProducts = 0;
for (let product of products) {
  sumProducts = sumProducts + product.price;
}
console.log("zad 4=" + sumProducts);
//////////////////////////

let sumFruits2 = 0;
let filterFruits = products.filter(
  (products2) => products2.category === "fruits"
);

for (let product2 of filterFruits) {
  console.log(product2.price);
  sumFruits2 = sumFruits2 + product2.price;
}
console.log("filter" + sumFruits2);
