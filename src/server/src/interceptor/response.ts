// 这是一个拦截器，用于处理响应数据，比如将响应数据转为格式化数据。

import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

// 定义一个新的响应格式类型
export interface ResponseFormat<T> {
  code: number;
  message: string;
  data: T;
}

// 修改拦截器泛型参数
export class ResponseFormatInterceptor<T>
  implements NestInterceptor<T, ResponseFormat<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseFormat<T>> {
    return next.handle().pipe(
      map((data: T) => {
        // 处理响应数据
        return {
          code: 0,
          message: 'success',
          data,
        };
      }),
    );
  }
}
