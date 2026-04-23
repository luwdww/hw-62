import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getArticles = async (req, res) => {
  const articles = [
    { id: 1, title: "Node.js Guide" },
    { id: 2, title: "Express Tips" }
  ];

  const filePath = path.join(__dirname, "../views/articles/list.ejs");
  const html = await ejs.renderFile(filePath, { articles });

  res.send(html);
};

export const getArticleById = async (req, res) => {
  const article = {
    id: req.params.articleId,
    title: "Node.js Guide"
  };

  const filePath = path.join(__dirname, "../views/articles/detail.ejs");
  const html = await ejs.renderFile(filePath, { article });

  res.send(html);
};