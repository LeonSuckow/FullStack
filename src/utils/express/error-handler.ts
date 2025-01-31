import { ApplicationError } from "../../errors/application-error";

export const ErrorHandler = (err, req, res, next) => {
  console.error("Erro capturado pelo middleware:", err);

  if (!(err instanceof ApplicationError)) {
    return res.status(500).json({ error: "Erro interno no servidor" });
  }

  res.status(err.httpCode).json({ error: err.message });
};
