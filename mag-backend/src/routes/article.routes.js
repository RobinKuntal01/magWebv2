import { Router } from "express";
import { getAllArticles, uploadArticle } from "../controllers/article.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router.route("/upload").post(
  upload.fields([
    {
      name: "articleImage",  //code to upload file to cloudinary using middleware
      maxCount: 1,
    },
  ]),

  uploadArticle
);

router.route("").get(getAllArticles)

export default router;
