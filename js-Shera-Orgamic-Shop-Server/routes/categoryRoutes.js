const express = require("express");
const router = express.Router();
router.get("/", async (_req, res) => {
    res.send({'hello':'gelo'});
});

module.exports = router;
