import * as express from "express";
const router = express.Router();

router.get("/contact-us", async (req, res, next) => {
  try {
    res.render("contact", {});
  } catch (error) {
    next(error);
  }
});

export default router;
