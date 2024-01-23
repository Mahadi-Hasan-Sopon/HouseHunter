const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { hashPassword, generateToken } = require("./utils/utils");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:8000"],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ["GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS"],
  })
);

const PORT = process.env.PORT || 8000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@househunter.uxp7lvt.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // database
    const database = client.db("HouseHunter");

    // Collections
    const userCollection = database.collection("users");

    // Routes
    app.get("/", (req, res) => {
      res.send(
        "<h1><center> Server is running at http://localhost:" +
          PORT +
          " </center></h1>"
      );
    });

    app.post("/signup", async (req, res) => {
      const user = req.body;
      const isExist = await userCollection.findOne({ email: user.email });
      if (isExist) {
        return res.send({ message: "User already exists" });
      } else {
        const hashedPassword = await hashPassword(user.password);

        const newUser = { ...user, password: hashedPassword };
        const result = await userCollection.insertOne(newUser);

        const token = await generateToken({
          ...newUser,
          _id: result.insertedId,
        });
        res.cookie("authToken", token, {
          httpOnly: true,
          sameSite: "none",
          secure: true,
        });
        res.send({ message: "User created successfully" });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});
