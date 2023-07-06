const express = require("express");

const router = express.Router();
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

const artworksControllers = require("./controllers/artworkControllers");
const favoriControllers = require("./controllers/favoriControllers");
const usersControllers = require("./controllers/usersControllers");
const authorControllers = require("./controllers/authorControllers");

router.post(
  "/login",
  usersControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);
router.get("/authors", authorControllers.browse);
router.get("/authors/:id", authorControllers.read);
router.get("/artworks", artworksControllers.browse);
router.get("/artworks/:id", artworksControllers.read);
router.put("/artworks/:id", verifyToken, artworksControllers.edit);
router.delete("/artworks/:id", verifyToken, artworksControllers.destroy);
router.post("/artworks", verifyToken, artworksControllers.add);
router.post("/users", hashPassword, usersControllers.add);

router.use(verifyToken);
router.put("/users/:id", verifyToken, hashPassword, usersControllers.edit);
router.get("/users", verifyToken, usersControllers.browse);
router.get("/users/:id", verifyToken, usersControllers.read);
router.delete("/users/:id", verifyToken, usersControllers.destroy);

// route hashed

router.put("/authors/:id", verifyToken, authorControllers.edit);
router.delete("/authors/:id", verifyToken, authorControllers.destroy);

router.post("/authors", verifyToken, authorControllers.add);

router.get("/favori", verifyToken, favoriControllers.browse);
router.get("/favori/:id", verifyToken, favoriControllers.read);
router.put("/favori/:id", verifyToken, favoriControllers.edit);
router.post("/favori", verifyToken, favoriControllers.add);
router.delete("/favori/:id", verifyToken, favoriControllers.destroy);

module.exports = router;
