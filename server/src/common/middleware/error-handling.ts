import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ErrorHandlingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      if (res.locals.error && res.locals.error.code === 11000) {
        res.status(400).json({
          status: 'fail',
          message: 'Email already exists. Please use a different email.',
        });
      } else {
        next(res.locals.error);
      }
    });
    next();
  }
}
