import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

// test component
import TheTestTailwind from '../TheTestTailwind.vue'

describe('TheTestTailwind', () => {
  it('renders tailwind component', () => {
    const wrapper = mount(TheTestTailwind)
    expect(wrapper.text()).toContain(
      'Hello world!  项目中需要让VSCode使用tailwindcss时有只能提示，是因为VSCode默认在编写字符串时不自动显示建议， 在项目的.vscode/settings.json中增加 "editor.quickSuggestions": { "strings": "on" } 即可开启 Test VSCode in tailwind css'
    )
  })
})
