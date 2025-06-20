import AppError from '@shared/errors/AppError';
import authConfig from '@config/auth';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface ITokenPayload {
  sub: string;
}

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('JWT toker is missing');
  }
  const [, token] = authHeader.split(' ');
  const { secret } = authConfig.jwt;
  try {
    const decodedToken = verify(token, secret!);
    const { sub } = decodedToken as ITokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid Token is missing');
  }
}
