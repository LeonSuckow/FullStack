import { ApplicationError } from "./application-error";

export class ResourceNotFoundError extends ApplicationError {
  constructor() {
    super(404, "Resource not found");
  }
}
