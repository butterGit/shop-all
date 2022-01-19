import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Butter:LGkpqYGJ29csKSj7@cluster0.rbyd9.mongodb.net/Shop?retryWrites=true&w=majority"
    );
    const db = client.db();

    const ordersCollection = db.collection("orders");

    const result = await ordersCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Order was inserted succesfully" });
  }
}

export default handler;
