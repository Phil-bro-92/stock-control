const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("stock_control");
    const usersCollection = db.collection("users");
    const usersRouter = createRouter(usersCollection);
    app.use("/api/users", usersRouter);
    const produceCollection = db.collection("produce");
    const produceRouter = createRouter(produceCollection);
    app.use("/api/produce", produceRouter);
    const bakeryCollection = db.collection("bakery");
    const bakeryRouter = createRouter(bakeryCollection);
    app.use("/api/bakery", bakeryRouter);
    const dairyCollection = db.collection("dairy");
    const dairyRouter = createRouter(dairyCollection);
    app.use("/api/dairy", dairyRouter);
    const meatsCollection = db.collection("meats");
    const meatsRouter = createRouter(meatsCollection);
    app.use("/api/meats", meatsRouter);
    const groceryCollection = db.collection("grocery");
    const groceryRouter = createRouter(groceryCollection);
    app.use("/api/grocery", groceryRouter);
    const alcoholCollection = db.collection("alcohol");
    const alcoholRouter = createRouter(alcoholCollection);
    app.use("/api/alcohol", alcoholRouter);
  })
  .catch(console.err);

app.listen(9000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
