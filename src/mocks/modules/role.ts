import { http, HttpResponse } from 'msw'

// 请求拦截器
import mswRequestInterceptor from '../request.interceptor'

// 初始定为权限code：[list, detail, create, edit, delete, kanban]
// 角色常量列表，测试暂定为超级管理员、管理员、普通用户
// 超级管理员的permission为all（代表所有权限，但是一般正式使用是一个菜单一个code，这里先这么写了）
// 管理员的permission为admin（代表管理员权限，暂定为和超级管理员差不多，只是没有一些重要菜单和重要操作的权限）
// 普通用户的permission为user（代表普通用户权限，暂定为有list，detail权限，无create，edit，delete权限）
const roles = [
  {
    type: 'super', // 超级管理员
    name: '超级管理员', // 超级管理员
    permissions: ['list', 'detail', 'create', 'edit', 'delete', 'kanban'] // 超级管理员权限
  },
  {
    type: 'admin', // 管理员
    name: '管理员', // 管理员
    permissions: ['list', 'detail', 'create', 'edit', 'delete'] // 管理员权限
  },
  {
    type: 'user', // 普通用户
    name: '普通用户', // 普通用户
    permissions: ['list', 'detail'] // 普通用户权限
  }
]

export const RoleHandles = [
  http.get('/api/role', (res) => {
    if (
      mswRequestInterceptor &&
      !mswRequestInterceptor({
        cookie: res.cookies
      })
    ) {
      return new HttpResponse(null, { status: 403 })
    }

    return HttpResponse.json({
      code: 0,
      message: 'success',
      data: JSON.parse(JSON.stringify(roles))
    })
  }),
  http.get('/api/role/:type', ({ params }) => {
    return HttpResponse.json({
      code: 0,
      message: 'success',
      data: roles.find((role) => role.type === params.type)
    })
  })
]
