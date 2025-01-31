const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
    
// ✅ Allow multiple origins
const allowedOrigins = ["http://127.0.0.1:5500", "http://localhost:3000"];
app.use(cors({
    origin: allowedOrigins,
    methods: "GET,POST",
    allowedHeaders: "Content-Type"
}));

app.use(express.json());

const GEO_API_URL = "http://api.geonames.org/searchJSON";
const USERNAME = "random753_chaudhari"; // Replace with your actual username

app.get("/api/city", async (req, res) => {
    try {
        const { q } = req.query;
        
        if (!q) {
            return res.status(400).json({ error: "Query parameter is required" });
        }

        // Fetch city suggestions from GeoNames API
        const response = await axios.get(GEO_API_URL, {
            params: {
                q,
                maxRows: 3,
                username: USERNAME
            }
        });

        const cities = response.data.geonames.map(city => city.name);
        return res.json({ cities });

    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ error: "Internal Server Error" });
    }   
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
