import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

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
        console.log('counter store beforeRestore:', ctx)
        console.log('counter store 即将恢复的数据为：', ctx.store.$state)
      }
    }
  }
)
