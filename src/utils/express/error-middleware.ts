import { ApplicationError } from "../../errors/application-error";

export const ErrorMiddleware = (err, req, res, next) => {
  console.log(err.message);

  if (!(err instanceof ApplicationError)) {
    return res.status(500).json({ error: "Erro interno no servidor" });
  }

  res.status(err.httpCode).json({ error: err.message });
};
