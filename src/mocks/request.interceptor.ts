type mswReqInfo = {
  cookie?: Record<string, string>
}

export default function mswRequestInterceptor(mswReq: mswReqInfo): boolean {
  // console.log('requestInterceptor', config)
  let isFlag = true

  // 1. valid application cookie
  isFlag = validateToken(mswReq)

  return isFlag
}

function validateToken(mswReq: mswReqInfo): boolean {
  const { cookie } = mswReq

  if (cookie?.token) {
    return true
  } else {
    return false
  }
}
