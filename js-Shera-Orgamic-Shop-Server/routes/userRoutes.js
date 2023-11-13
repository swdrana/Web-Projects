const express = require("express");
const router = express.Router();
router.get("/", async (_req, res) => {
    res.send({'user':'nai'});
});

module.exports = router;
