use stock_control;
db.dropDatabase();

db.produce.insertMany([
  {
    product: "Bananas",
    price: {
        standard: 0.89,
        offer: 0.59
    },
    origin: "Columbia",
    quantity: 130,
    stock_level: "High",
  },
  {
    product: "Apples",
    price: {
        standard: 0.99,
        offer: 0.79
    },
    origin: "Peru",
    quantity: 34,
    stock_level: "Medium",
  },
  {
    product: "Grapes",
    price: {
        standard: 1.89,
        offer: 1.59
    },
    origin: "France",
    quantity: 23,
    stock_level: "Medium",
  },
]);

db.bakery.insertMany([]);
db.dairy.insertMany([]);
db.meats.insertMany([]);
db.fish.insertMany([]);
db.grocery.insertMany([]);
db.alcohol.insertMany([]);
db.drinks.insertMany([]);
