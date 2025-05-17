import logger from 'src/utils/logger';

export default function loggerMiddleware(req, res, next: () => void) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  logger.info(`请求: ${req.method} ${req.url}`);
  next();
}
