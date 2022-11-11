const express = require('express');
const cors = require('cors');
const axios = require('axios');

const router = express.Router();

router.use(cors());

router.get('/pc', (req, res) => {
    const params = {
        api_key: "A8C111662CE74C428183F7D650C23A16",
        type: "category",
        category_id: "4924894011",
        amazon_domain: "amazon.com"
    }
    axios.get('https://api.rainforestapi.com/request', { params })
    .then(response => {
        res.json(response.data.category_results);
        // res.(JSON.stringify(response.data, 0, 2));
    }).catch(error => {
        console.log(error);
    })
})


module.exports = router;