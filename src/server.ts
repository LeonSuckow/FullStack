import {saudacao} from "./utils/greeting";
import express from 'express';

saudacao()
const app = express();
const port = 3333;

app.listen(port, () => {
  console.log(`Application running localhost:${port}`);
});
