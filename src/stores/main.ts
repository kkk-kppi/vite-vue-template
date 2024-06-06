import type { App } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export function setupStore(app: App) {
  const pinia = createPinia()
  // 创建持久化存储方案
  const persistedState = createPersistedState({
    // 配置全局前缀，storeKey是store的第一个参数name
    key: (storeKey) => {
      const prefix = '__2V_'
      getPersistedStateKeys(prefix, storeKey)
      return `__2V_${storeKey}__`
    },
    // 启用默认所有store持久化
    auto: true,
    // 配置存储方式
    storage: localStorage,
    // 全局加密，这里暂时没引入加密方法，做了修改记录的处理
    serializer: {
      // 序列化，可在这加密
      serialize: (value) => {
        return JSON.stringify({
          ...value,
          __2V_Time__: new Date().getTime() // 记录修改时间
        })
      },
      // 反序列化，可在这解密
      deserialize: (value) => JSON.parse(value)
    },
    // 持久化/恢复 Store 时可能发生的任何错误都将使用 console.error 输出
    debug: true
  })
  // 应用持久化插件
  pinia.use(persistedState)

  app.use(pinia)
}

/*
 * 持久化存储方案
 * 1. 配置全局前缀，storeKey是store的第一个参数name
 * 2. 启用默认所有store持久化
 * 3. 配置存储方式
 */
interface PersistedStateRecord {
  name: string
  prefix: string
  persistedKey: string
}
type PersistedStateRecords = PersistedStateRecord[]
// 记录所有持久化存储模块的缓存key
function getPersistedStateKeys(prefix: string, storeKey: string) {
  // 获取缓存中的记录
  const persistedStateKeys = localStorage.getItem('__2V_persistedStateKeys')
  if (persistedStateKeys) {
    // 获取缓存中的记录
    const keys: PersistedStateRecords = JSON.parse(persistedStateKeys)

    const currentKey = keys.find((key) => key.name === storeKey)
    if (!currentKey) {
      keys.push({
        name: storeKey,
        prefix: prefix,
        persistedKey: `${prefix}${storeKey}__`
      })
    }

    localStorage.setItem('__2V_persistedStateKeys', JSON.stringify(keys))
  } else {
    localStorage.setItem(
      '__2V_persistedStateKeys',
      JSON.stringify([
        {
          name: storeKey,
          prefix: prefix,
          persistedKey: `${prefix}${storeKey}__`
        }
      ])
    )
  }
}
