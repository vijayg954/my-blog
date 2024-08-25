import express from "express";
import ensureAuthenticated from "../middleware/Auth.js";
import {
  createBlog,
  deleteBlog,
  getBlogById,
  getBlogs,
  updateBlog,
} from "../controllers/blogcontroller.js";

const router = express.Router();

router.route("/blog/new").post(ensureAuthenticated, createBlog);
router.route("/blogs").get(getBlogs);
router.route("/blog/:id").get(getBlogById).put(ensureAuthenticated, updateBlog).delete(ensureAuthenticated, deleteBlog);

export default router;
