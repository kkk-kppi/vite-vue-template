import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

// 需要测试的组件
import TheTestProps from '../TheTestProps.vue'

describe('TheTestProps', () => {
  it('renders not test props is default value', () => {
    const wrapper = mount(TheTestProps)
    expect(wrapper.text()).toContain('Test Default Value')
  })

  it('renders test props value from parent', () => {
    const wrapper = mount(TheTestProps, {
      props: {
        test: 'Test Props Value'
      }
    })
    expect(wrapper.text()).toContain('Test Props Value')
  })
})
