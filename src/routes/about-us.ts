import * as express from "express";
const router = express.Router();

router.get("/about-us", async (req, res, next) => {
  try {
    res.render("about-us", {});
  } catch (error) {
    next(error);
  }
});

export default router;
