import * as bodyParser from "body-parser";
import express from "express";
import userRouter from "./routes/user-routes";

const app = express();
const port = 3333;

app.use(userRouter.routes);
app.use(express.json());
app.use(bodyParser);

app.listen(port, () => {
  console.log(`Application running http://localhost:${port} 🚀🚀🚀`);
});
