// first
const massiveNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const average = massiveNumber.reduce((a, b) => a + b, 0) / massiveNumber.length;
console.log(average);

// second
const elementObject = [
  {
    name: "Liza",
    age: 21,
  },
  {
    name: "Nuca",
    age: 22,
  },
  {
    name: "Elene",
    age: 22,
  },
  {
    name: "Anna",
    age: 21,
  },
  {
    name: "Mariam",
    age: 22,
  },
];
console.log(elementObject);

// third
const product = {
  productTitle: "Macbook Pro m2",
  productDescription: "RAM 16GB",
  productPrice: 1299,
  shopAddresses: "5, Sulkhan Tsintsadze street",
  productMemoryInGB: 512,
  productResolution: "2560 by 1600 resolution at 227 pixels per inch",
};

console.log("Product name is", product["productTitle"]);
console.log("Product price is", product["productPrice"]);
console.log("Product  resolution  is", product["productResolution"]);
console.log("and you can buy it at ", product["shopAddresses"]);
