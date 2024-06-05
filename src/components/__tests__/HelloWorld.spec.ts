import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    // mount Hello World component, pass in a msg
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    // expect get wrapper text to contain msg is Hello Vitest
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
