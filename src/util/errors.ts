export const invalid = <A>(): A => {
  throw new Error('Invalid input');
};

export const impossible = <A>(): A => {
  throw new Error('Unreachable code');
};

export class ApplicationError extends Error {
  status: number;
  constructor(message = 'An unexpected error has occurred') {
    super(message);
    this.status = 500;
  }
}

export class NotFoundError extends ApplicationError {
  constructor(message = 'Resource not found') {
    super(message);
    this.status = 404;
  }
}

export class BadRequest extends ApplicationError {
  constructor(message = 'Invalid input supplied') {
    super(message);
    this.status = 400;
  }
}
