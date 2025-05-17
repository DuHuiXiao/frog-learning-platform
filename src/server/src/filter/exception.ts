import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import logger from 'src/utils/logger';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception.getStatus();

    const responseData = {
      code: exception.getStatus(),
      message: exception.message,
      data: null,
    };

    logger.error(`发生错误: ${exception.message}`);

    response.status(status).json(responseData);
  }
}
