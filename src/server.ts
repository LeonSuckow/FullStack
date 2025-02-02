import express from "express";
import userRouter from "./modules/users/user-routes";
import { ErrorMiddleware } from "./utils/express/error-middleware";
import { RequestMiddleware } from "./utils/express/request-middleware";
import { myDataSource } from "./datasource";


console.log('Connecting database. Initializing datasource...')
myDataSource
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!")
    })
    .catch((err) => {
      console.error("Error during Data Source initialization:", err)
    })

const app = express();
const port = 3333;

app.use(express.json());
app.use(RequestMiddleware);
app.use(userRouter.routes);
app.use(ErrorMiddleware);

app.listen(port, () => {
  console.log(`Application running http://localhost:${port} 🚀🚀🚀`);
});
