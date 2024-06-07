import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

// test component
import TheTestTailwind from '../TheTestTailwind.vue'

describe('TheTestTailwind', () => {
  it('renders tailwind component', () => {
    const wrapper = mount(TheTestTailwind)
    expect(wrapper.get('.title').text()).contain('Hello world!')
    expect(wrapper.get('.desc').attributes('class')).toBe('desc mt-8 ml-4 m-0 mr-4')
    expect(wrapper.get('.desc').text()).contain('Test VSCode in tailwind css')
  })
})
