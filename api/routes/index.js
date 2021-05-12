const express = require("express");

const router = express.Router();

router.get("/", (request, response, next) => {

    response.json({ test: "test" });

});

module.exports = router;