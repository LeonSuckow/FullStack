import express from "express";
import userRouter from "./routes/user-routes";
import { ErrorHandler } from "./utils/express/error-handler";

const app = express();
const port = 3333;

app.use(express.json());
app.use(userRouter.routes);
app.use(ErrorHandler);

app.listen(port, () => {
  console.log(`Application running http://localhost:${port} 🚀🚀🚀`);
});
