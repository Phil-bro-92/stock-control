use stock_control;
db.dropDatabase();

db.users.insertMany([
  {
    username: "philbro",
    password: "mockup"
  }
])

db.produce.insertMany([
  {
    product: "Bananas",
    price: {
      standard: 0.89,
      offer: 0.59,
    },
    origin: "Columbia",
    quantity: 130,
    stock_level: "High",
    picture: "https://media.istockphoto.com/id/174959827/photo/banana.jpg?s=612x612&w=0&k=20&c=rx4zQuWlGafwqqIjF_z4wEGh0BzSxiZcMxFjtwFxUXU="
  },
  {
    product: "Apples",
    price: {
      standard: 0.99,
      offer: 0.79,
    },
    origin: "Peru",
    quantity: 34,
    stock_level: "Medium",
    picture: "https://media.istockphoto.com/id/133616480/photo/harvest.jpg?s=612x612&w=0&k=20&c=N74B06XcTPT7PtetlTXmqJ4bVxq4GAWUBm3OmfXGLjA="
  },
  {
    product: "Grapes",
    price: {
      standard: 1.89,
      offer: 1.59,
    },
    origin: "France",
    quantity: 23,
    stock_level: "Medium",
    picture: "https://media.istockphoto.com/id/172304886/photo/bunch-of-green-grapes-laying.jpg?s=612x612&w=0&k=20&c=WOCfia6i2586m6NoqhU10CycAXBbGDOXnf7tjjJwnD4="
  },
  {
    product: "Pears",
    price: {
      standard: 1.49,
      offer: 1.19,
    },
    origin: "Belgium",
    quantity: 10,
    stock_level: "Low",
    picture: "https://media.istockphoto.com/id/186861864/photo/pear-green-with-leaf.jpg?s=612x612&w=0&k=20&c=SUozClQ4PvD4o5WkYGwMeKXWLVQdGW4KtiwfBPqEl7o="
  },
]);

db.bakery.insertMany([
  {
    product: "Tiger Bread",
    price: {
      standard: 1.19,
      offer: 0.79,
    },
    quantity: 29,
    stock_level: "Medium",
  },
  {
    product: "Wholemeal Bread",
    price: {
      standard: 0.89,
      offer: 0.79,
    },
    quantity: 19,
    stock_level: "Low",
  },
  {
    product: "Pancakes",
    price: {
      standard: 1.49,
      offer: 0.99,
    },
    quantity: 17,
    stock_level: "Low",
  },
]);
db.dairy.insertMany([
  {
    product: "Full Milk",
    price: {
      standard: 1.39,
      offer: 1.19,
    },
    size: "4 pints",
    quantity: 30,
    stock_level: "Medium",
  },
  {
    product: "Full Milk",
    price: {
      standard: 0.99,
      offer: 0.79,
    },
    size: "2 pints",
    quantity: 40,
    stock_level: "Medium",
  },
  {
    product: "Full Milk",
    price: {
      standard: 0.69,
      offer: 0.49,
    },
    size: "1 pint",
    quantity: 80,
    stock_level: "High",
  },
  {
    product: "Semi-skimmed Milk",
    price: {
      standard: 1.29,
      offer: 1.09,
    },
    size: "4 pints",
    quantity: 50,
    stock_level: "High",
  },
  {
    product: "Semi-skimmed Milk",
    price: {
      standard: 0.89,
      offer: 0.79,
    },
    size: "2 pints",
    quantity: 40,
    stock_level: "Medium",
  },
  {
    product: "Semi-skimmed Milk",
    price: {
      standard: 0.59,
      offer: 0.49,
    },
    size: "1 pint",
    quantity: 60,
    stock_level: "High",
  },
  {
    product: "Skimmed Milk",
    price: {
      standard: 1.19,
      offer: 0.99,
    },
    size: "4 pints",
    quantity: 30,
    stock_level: "Medium",
  },
  {
    product: "Skimmed Milk",
    price: {
      standard: 0.99,
      offer: 0.79,
    },
    size: "2 pints",
    quantity: 40,
    stock_level: "Medium",
  },
  {
    product: "Skimmed Milk",
    price: {
      standard: 0.69,
      offer: 0.49,
    },
    size: "1 pint",
    quantity: 80,
    stock_level: "High",
  },
]);
// db.meats.insertMany([]);
// db.fish.insertMany([]);
// db.grocery.insertMany([]);
// db.alcohol.insertMany([]);
// db.drinks.insertMany([]);
