import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { EntityNotFoundError } from 'typeorm';

export class ModelNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: EntityNotFoundError, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    return response.status(404).json({
      error: {
        error: 'Not found',
        message: exception.message
      }
    });
  }
}
