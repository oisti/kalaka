const router       = require("express").Router();
const controller   = require("./controller");

router.post("/", controller.postAnnouncement);

module.exports = router;