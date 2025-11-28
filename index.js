import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = `mongodb+srv://${process.env.Mongodb_Name}:${process.env.NEXTAUTH_SECRET}@cluster0.dw7x2dn.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
});

let usersCollection;
let productsCollection;

// Admin auth middleware
const verifyAdmin = async (req, res, next) => {
  try {
   // optional log
    const adminToken = req.headers["x-admin-token"];

    console.log("Admin token received:", adminToken);

    if (adminToken !== "admin123") {
      return res.status(403).json({ message: "Forbidden: Admin access required" });
    }

    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// User auth middleware
const verifyUser = async (req, res, next) => {
  try {
    const userEmail = req.query.email || req.headers["x-user-email"];
    console.log("User email:", userEmail);

    //  if(userEmail===email){

    //  }

    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Test route
app.get("/", (req, res) => {
  res.send("🍕 Food Menu API running!");
});

async function run() {
  try {
    // await client.connect();
    const db = client.db("test");
    usersCollection = db.collection("users");
    productsCollection = db.collection("products");

    console.log("🍔 Connected to MongoDB!");

    // Add Product (secured)
    app.post("/products", verifyAdmin, async (req, res) => {
      try {
        const newProduct = req.body;
        newProduct.created_at = new Date();
        const result = await productsCollection.insertOne(newProduct);
        res.status(201).json(result);
      } catch (err) {
        res.status(500).json({ message: "Insert failed", error: err.message });
      }
    });

    // Get All Products (secured for users)
    app.get("/products", async (req, res) => {
      try {
        const products = await productsCollection.find().toArray();
        res.status(200).json(products);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });
    // GET /products?email=example@example.com
    app.get("/manage-product", async (req, res) => {
      try {
        const userEmail = req.query.email;

        // Check if email is provided
        if (!userEmail) {
          return res.status(400).json({ message: "Email query parameter is required" });
        }

        // Fetch products that belong to this email
        const products = await productsCollection.find({ email: userEmail }).toArray();

        res.status(200).json(products);
      } catch (err) {
        console.error("Error fetching products:", err);
        res.status(500).json({ message: "Failed to fetch products", error: err.message });
      }
    });


    // Get Single Product
    app.get("/products/:id", async (req, res) => {
      try {
        const product = await productsCollection.findOne({ _id: new ObjectId(req.params.id) });
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // Delete Product (secured)
    app.delete("/products/:id", verifyAdmin, async (req, res) => {
      try {
        const result = await productsCollection.deleteOne({ _id: new ObjectId(req.params.id) });
        res.status(200).json(result);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // Update Product (secured)
    app.patch("/products/:id", verifyAdmin, async (req, res) => {
      try {
        const productData = req.body;
        const result = await productsCollection.updateOne(
          { _id: new ObjectId(req.params.id) },
          { $set: productData }
        );
        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product updated successfully" });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // Latest 6 Products
    app.get("/latest-products", async (req, res) => {
      try {
        const products = await productsCollection.find().sort({ created_at: -1 }).limit(6).toArray();
        res.status(200).json(products);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

  } catch (err) {
    console.error(err);
  }
}

run();

app.listen(port, () => {
  console.log(`🍔 Food Menu Server running on port: ${port}`);
});
