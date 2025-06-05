import { Request, Response, NextFunction, RequestHandler } from 'express';

function HandlerVoid(
  controllerMethod: (req: Request, res: Response, next: NextFunction) => any
): RequestHandler {
  return (req, res, next) => {
    try {
      // Chama o método do controller passando req, res, next
      const result = controllerMethod(req, res, next);

      // Se for Promise (async), trata o erro com catch
      if (result && result instanceof Promise) {
        result.catch(next);
      }
    } catch (error) {
      next(error);
    }
  };
}

export default HandlerVoid;
