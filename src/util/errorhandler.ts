import { ErrorRequestHandler } from 'express';
import { ApplicationError } from './errors';

export const errorHandler: ErrorRequestHandler = (error, _, res, next) => {
  console.log('burda');
  console.error(error.stack);
  if (error instanceof ApplicationError) {
    return res.status(error.status).json({
      message: error.message,
    });
  }
  return next(error);
};
