export const ValidationPipeConfig = {
  // transform: true, // 开启转换
  whitelist: true, // 只保留被验证的属性
  forbidNonWhitelisted: true, // 禁止未知属性
  validationError: { target: false }, // 自定义错误响应
};
