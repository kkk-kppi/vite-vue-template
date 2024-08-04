import type { Directive, DirectiveBinding } from 'vue'
import useUserStore from '@/stores/modules/user'
import { errorLogger } from '@/common/logger'

function userPermission(): Array<string> {
  const useUser = useUserStore()
  return useUser.getPermissions
}

// 移除元素方法
// 优先级 remove方法，兜底css display: none;
function useElementPermission(el: HTMLElement): void {
  try {
    if (el.remove) {
      el.remove()
    } else if (el.parentNode) {
      el.parentNode.removeChild(el)
    } else {
      el.style.display = 'none'
    }
  } catch (error) {
    errorLogger('useElementPermission error, set display: none hidden element!')
    el.style.display = 'none'
  }
}

// 判断权限字符是否显示
// 根据对应的权限字符判断是否显示
function useCheckPermission(el: HTMLElement, code: Array<string> | string | null | unknown): void {
  // null undefined "" 0 false 等假值
  if (!code) {
    useElementPermission(el)
    return
  }

  const userPermissionCode = userPermission()
  // 指令传入了权限字符
  // 但用户没有权限，或者说没有角色
  if (!userPermissionCode.length) {
    useElementPermission(el)
    return
  }

  // 指令传入了权限字符，为单字符
  if (typeof code === 'string') {
    if (!userPermissionCode.includes(code)) {
      useElementPermission(el)
      return
    }
  }

  // 指令传入了权限字符，为数组
  if (Array.isArray(code)) {
    if (!code.some((item) => userPermissionCode.includes(item))) {
      useElementPermission(el)
      return
    }
  }
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding
    useCheckPermission(el, value)
  },

  updated(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding
    useCheckPermission(el, value)
  }
} as Directive
