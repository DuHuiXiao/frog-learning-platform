import logger from 'src/utils/logger';

export default function loggerMiddleware(req, res, next: () => void) {
  logger.info(`请求: ${req!.method} ${req!.url}`);
  next();
}
