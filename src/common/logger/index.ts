// 默认样式打印器
export function infoLogger(message: string) {
  console.log(
    `%c[${import.meta.env.VITE_APP_TITLE} Info] ${message}`,
    'font-weight: 600; font-size: 16px;'
  )
}

// 告警样式打印器
export function warnLogger(message: string) {
  console.log(
    `%c[${import.meta.env.VITE_APP_TITLE} Warn] ${message}`,
    'font-weight: 600; font-size: 16px; color: #FEF6D5;'
  )
}

// 错误样式打印器
export function errorLogger(message: string) {
  console.log(
    `%c[${import.meta.env.VITE_APP_TITLE} Error] ${message}`,
    'font-weight: 600; font-size: 16px; color: red;'
  )
}

// 通知样式打印器
export function noticeLogger(message: string) {
  console.log(
    `%c[${import.meta.env.VITE_APP_TITLE} Notice] ${message}`,
    'font-weight: 600; font-size: 16px; color: #409EFF;'
  )
}

// 成功样式打印器
export function successLogger(message: string) {
  console.log(
    `%c[${import.meta.env.VITE_APP_TITLE} Success] ${message}`,
    'font-weight: 600; font-size: 16px; color: #67C23A;'
  )
}

// 请求样式打印器
export function requestLogger(message: string) {
  console.log(
    `%c[${import.meta.env.VITE_APP_TITLE} Request] ${message}`,
    'font-weight: 600; font-size: 16px; color: #E6A23C; border: 1px solid #E6A23C;'
  )
}

// 响应样式打印器
export function responseLogger(message: string) {
  console.log(
    `%c[${import.meta.env.VITE_APP_TITLE} Response] ${message}`,
    'font-weight: 600; font-size: 16px; color: #67C23A; border: 1px solid #67C23A;'
  )
}
