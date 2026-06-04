import express from "express";
import { articlesRouter } from "./routes/articleRoute.js";
import { journalistRouter } from "./routes/journalistController.js";
import { categoryRouter } from "./routes/categoryRoute.js";
const app = express();
const PORT = 3000;

// app.get('/', (req, res) => {
//     res.json(articles)
// });

app.use(express.json());
app.use('/articles', articlesRouter);
app.use('/journalists', journalistRouter);
app.use('/categories', categoryRouter);


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
