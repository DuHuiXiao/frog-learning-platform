import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import loggerMiddleware from './middleware/logger';
import { ResponseFormatInterceptor } from './interceptor/response';
import { HttpExceptionFilter } from './filter/exception';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(loggerMiddleware);
  app.useGlobalInterceptors(new ResponseFormatInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(port);
  console.log(`nest 服务器已启动，监听端口： ${port}`);
}

void bootstrap();
