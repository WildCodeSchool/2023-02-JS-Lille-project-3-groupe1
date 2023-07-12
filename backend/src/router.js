const express = require("express");

const router = express.Router();
const { hashPassword, verifyPassword } = require("./services/auth");

const artworksControllers = require("./controllers/artworkControllers");
const favoriControllers = require("./controllers/favoriControllers");
const usersControllers = require("./controllers/usersControllers");
const authorControllers = require("./controllers/authorControllers");

router.post(
  "/login",
  usersControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/show-token", (req, res) => {
  console.info(req.cookies);

  res.sendStatus(200);
});
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
router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.delete("/users/:id", usersControllers.destroy);

router.put("/authors/:id", authorControllers.edit);
router.delete("/authors/:id", authorControllers.destroy);
router.post("/authors", authorControllers.add);

router.get("/favori", favoriControllers.browse);
router.get("/favori/:id", favoriControllers.read);
router.put("/favori/:id", favoriControllers.edit);
router.post("/favori", favoriControllers.add);
router.delete("/favori/:id", favoriControllers.destroy);

router.put("/artworks/:id", artworksControllers.edit);
router.post("/artworks", artworksControllers.add);
router.delete("/artworks/:id", artworksControllers.destroy);

module.exports = router;
