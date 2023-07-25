const express = require("express");

const router = express.Router();
const {
  hashPassword,
  verifyPasswordAndGenerateToken,
  verifyToken,
} = require("./services/auth");

const artworksControllers = require("./controllers/artworkControllers");
const favoriControllers = require("./controllers/favoriControllers");
const usersControllers = require("./controllers/usersControllers");
const authorControllers = require("./controllers/authorControllers");

router.post(
  "/login",
  usersControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPasswordAndGenerateToken
);
router.get("/acount/favoris", verifyToken);

router.get("/logout", (req, res) => {
  res.clearCookie("token");

  res.sendStatus(204);
});
router.get("/authors/:id", authorControllers.read);
router.get("/artworks", artworksControllers.browse);
router.get("/artworks/:id", artworksControllers.read);
router.post("/users", hashPassword, usersControllers.add);

router.get("/authors", authorControllers.browse);

router.put("/users/:id", hashPassword, usersControllers.edit);
router.get("/users", verifyToken, usersControllers.browse);
router.get("/users/:id", verifyToken, usersControllers.read);
router.delete("/users/:id", verifyToken, usersControllers.destroy);

router.put("/authors/:id", verifyToken, authorControllers.edit);
router.delete("/authors/:id", verifyToken, authorControllers.destroy);
router.post("/authors", verifyToken, authorControllers.add);

router.get("/favori", verifyToken, favoriControllers.browse);
router.get("/favori/:id", favoriControllers.read);
router.put("/favori/:id", favoriControllers.edit);
router.post("/favori", favoriControllers.add);
router.delete("/favori/:id", favoriControllers.destroy);

router.put("/artworks/:id", verifyToken, artworksControllers.edit);
router.post("/artworks", verifyToken, artworksControllers.add);
router.delete("/artworks/:id", verifyToken, artworksControllers.destroy);

module.exports = router;
