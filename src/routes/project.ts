import * as express from "express";
const router = express.Router();

router.get("/projects", async (req, res, next) => {
  try {
    res.render("projects", {});
  } catch (error) {
    next(error);
  }
});

router.get("/projects/detail", async (req, res, next) => {
  try {
    res.render("projects/detail", {});
  } catch (error) {
    next(error);
  }
});

export default router;
