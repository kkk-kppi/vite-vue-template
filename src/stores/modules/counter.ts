import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { noticeLogger } from '@/common/logger'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }

    return { count, doubleCount, increment }
  },
  {
    persist: {
      beforeRestore: (ctx) => {
        noticeLogger(
          `The [theme] store is being restored, 恢复的数据为：${JSON.stringify(ctx.store.$state)}`
        )
      }
    }
  }
)
