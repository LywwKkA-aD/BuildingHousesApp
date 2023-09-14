const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const app = express();
const PORT = 3001;
const serviceAccount = require('./sk-kaskad72ru-firebase-adminsdk-2kybk-cc9b4c25f6.json');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.use(cors({
    origin: ["http://104.248.36.229", "http://localhost:3000"],  // Add your frontend's address
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true  // This allows session cookies to be sent back and forth
  }));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

app.get('/', (req, res) => {
    res.send('Welcome to SK-KASKAD72RU API!');
});

app.get('/houses', async (req, res) => {
    try {
        const housesCollection = db.collection('houses');
        const snapshot = await housesCollection.get();

        let houses = [];
        snapshot.forEach(doc => {
            let id = doc.id;
            let data = doc.data();
            houses.push({ id, ...data });
        });

        res.status(200).json(houses); // Using .json() here ensures that the response type is application/json
    } catch (error) {
        console.error("Error fetching data from Firebase:", error);
        res.status(500).send(error.message);
    }
});

app.get('/plans', async (req, res) => {
    try {
        const plansCollection = db.collection('plans');
        const snapshot = await plansCollection.get();

        let plans = [];
        snapshot.forEach(doc => {
            let id = doc.id;
            let data = doc.data();
            plans.push({ id, ...data });
        });

        res.status(200).json(plans); // Using .json() here ensures that the response type is application/json
    } catch (error) {
        console.error("Error fetching data from Firebase:", error);
        res.status(500).send(error.message);
    }
});

app.put('/houses/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const houseRef = db.collection('houses').doc(id);
        await houseRef.update(updatedData);

        res.status(200).send("House updated successfully!");
    } catch (error) {
        console.error("Error updating the house in Firebase:", error);
        res.status(500).send(error.message);
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});