import { Request, Response, NextFunction, RequestHandler } from 'express';

function HandlerVoid(
  controllerMethod: (req: Request, res: Response, next: NextFunction) => any
): RequestHandler {
  return (req, res, next) => {
    try {
      const result = controllerMethod(req, res, next);

      if (result && result instanceof Promise) {
        result.catch(next);
      }
    } catch (error) {
      next(error);
    }
  };
}

export default HandlerVoid;
