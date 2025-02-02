import express from "express";
import userRouter from "./routes/user-routes";
import { ErrorMiddleware } from "./utils/express/error-middleware";
import { RequestMiddleware } from "./utils/express/request-middleware";

const app = express();
const port = 3333;

app.use(express.json());
app.use(RequestMiddleware);
app.use(userRouter.routes);
app.use(ErrorMiddleware);

app.listen(port, () => {
  console.log(`Application running http://localhost:${port} 🚀🚀🚀`);
});
