const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

app.post('/api/database/search', async (req, res) => {
    try {
        const response = await axios.post(
            'https://vdjdb.cdr3.net/api/database/search',
            req.body,
            { headers: { "Content-Type": "application/json" } }
        );
        res.json(response.data);
    } catch (error) {
        res.json(error);
    }
});

app.listen(5000, () => console.log('Proxy server running on port 5000'));
