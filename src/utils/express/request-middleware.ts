export const RequestMiddleware = (req, res, next) => {
  console.log(`Recebendo request ${req.method} no endpoint ${req.url}`);

  next();
};
