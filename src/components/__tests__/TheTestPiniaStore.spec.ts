import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'

// 这里引用的是真实的store去走测试
// 如果不想这么干，可以参考 https://juejin.cn/post/7265153693141221415
// 但目前没发现有什么问题
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/modules/counter'

// TheTestPiniaStore
import TheTestPiniaStore from '../TheTestPiniaStore.vue'

describe('TheTestPiniaStore', () => {
  // 在每次测试之前，创建一个新的 Pinia 实例，相当于给每个应用实例注册一个pinia实例
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  // 测试pinia能否正常工作
  it('Test counter store', () => {
    const counterStore = useCounterStore()
    expect(counterStore.count).toBe(0)

    counterStore.increment()
    expect(counterStore.count).toBe(1)
    expect(counterStore.doubleCount).toBe(2)
  })

  // 测试组件能否正常工作
  it('测试组件能否正常工作', async () => {
    const counterStore = useCounterStore()

    const wrapper = mount(TheTestPiniaStore)
    expect(wrapper.find('.count span').text()).toBe('0')
    expect(wrapper.find('.double-count span').text()).toBe('0')

    // 触发点击按钮
    wrapper.find('.increment').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.count span').text()).toBe('1')
    expect(wrapper.find('.double-count span').text()).toBe('2')

    // 模拟外部改变store
    counterStore.increment()
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.count span').text()).toBe('2')
      expect(wrapper.find('.double-count span').text()).toBe('4')
    })
  })
})
