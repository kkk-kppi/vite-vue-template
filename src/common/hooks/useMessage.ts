// 统一封装message弹窗
// 全局单例

import { useMessage } from 'naive-ui'
import type { MessageOptions, MessageReactive } from 'naive-ui'

const NaiveMessage = useMessage()

export default class _2V0Message {
  message: MessageReactive | null
  config: MessageOptions
  constructor() {
    this.message = null
    this.config = {
      type: 'info',
      duration: 3000,
      closable: true,
      keepAliveOnHover: false
    }
  }
  info(content: string) {
    if (this.message) this.message.destroy()

    this.message = NaiveMessage.info(content, this.config)
  }
  success(content: string) {
    if (this.message) this.message.destroy()

    this.message = NaiveMessage.success(content, this.config)
  }
  warning(content: string) {
    if (this.message) this.message.destroy()

    this.message = NaiveMessage.warning(content, this.config)
  }
  error(content: string) {
    if (this.message) this.message.destroy()

    this.message = NaiveMessage.error(content, this.config)
  }
}
