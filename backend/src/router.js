const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const artworksControllers = require("./controllers/artworkControllers");

router.get("/artworks", artworksControllers.browse);
router.get("/artworks/:id", artworksControllers.read);
router.put("/artworks/:id", artworksControllers.edit);
router.post("/artworks", artworksControllers.add);
router.delete("/artworks/:id", artworksControllers.destroy);

const usersControllers = require("./controllers/usersControllers");

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post("/users", usersControllers.add);
router.delete("/users/:id", usersControllers.destroy);

module.exports = router;
