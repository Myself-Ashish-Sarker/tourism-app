const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongo-app.q62fegx.mongodb.net/?retryWrites=true&w=majority&appName=mongo-app`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const spotCollection = client.db("spotdb").collection('spot');
        const userCollection = client.db("spotdb").collection("user");
        // const myListCollection = client.db("spotdb").collection("user");

        // Adding Spot
        app.get('/addspots', async(req, res) => {
            const cursor = spotCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.post('/addspots', async(req, res) => {
            const newSpot = req.body;
            console.log(newSpot);
            const result = await spotCollection.insertOne(newSpot);
            res.send(result);
        })
        // Adding Spot

        // Adding User
        app.post('/user', async(req, res) => {
            const user = req.body;
            console.log(user);
            const result = await userCollection.insertOne(user);
            res.send(result);
        })
        // Adding User


        app.get('/spots', async(req, res) => {
            try {
                const cursor = spotCollection.find();
                const result = await cursor.toArray();
                res.send(result)
            } catch (error) {
                console.error('Error is ',error);
                res.status(500).send("error fetching spots");
            }
        })

        app.put('/spots/:id', async(req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id)};
            const options = { upsert: true };
            const updatedSpots = req.body;
            const spots = {
                $set: {
                    image: updatedSpots.image,
                    spot: updatedSpots.spot,
                    country: updatedSpots.country,
                    location: updatedSpots.location,
                    description: updatedSpots.description,
                    cost: updatedSpots.cost,
                    season: updatedSpots.season,
                    travel: updatedSpots.travel,
                    visitor: updatedSpots.visitor,
                }
            }
            const result = await spotCollection.updateOne(filter, spots, options);
            res.send(result);
        })

        app.get('/spots/:id',  async(req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id)};
            const result = await spotCollection.findOne(query);
            res.send(result);
        })

        app.delete('/spots/:id', async(req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await spotCollection.deleteOne(query);
            res.send(result);
        })


        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);











app.get('/', (req, res) => {
    res.send("server is running");
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})