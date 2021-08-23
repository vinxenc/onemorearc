import * as express from "express";
const router = express.Router();
const limit = 10;

router.get("/projects", async (req, res, next) => {
  try {
    const page = req.query.page ? Number(req.query.page) : 1;
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    const countQuery = new Parse.Query(Post);

    const count = await countQuery.count();
    const posts = await query
      .limit(limit)
      .skip(limit * (page - 1))
      .find();

    res.render("projects", {
      posts,
      page,
      totalPage: Math.floor(count / limit) + 1,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/projects/:alias", async (req, res, next) => {
  try {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);

    const post = await query.equalTo("alias", req.params.alias).first();

    if (!post) { throw new Error("Post Not Found"); }

    const relatedPostQuery = new Parse.Query(Post);
    const relatedPosts = await relatedPostQuery
      .notEqualTo("objectId", post.id)
      .find();

    res.render("projects/detail", { post, relatedPosts });
  } catch (error) {
    next(error);
  }
});

export default router;
