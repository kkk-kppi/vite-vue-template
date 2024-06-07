import { describe, it, expect } from 'vitest'

import TheTestMock from '../TheTestMock.vue'

// 测试mock数据
describe('测试mock数据', () => {
  it('should render correctly', () => {
    expect(TheTestMock).toBeTruthy()
  })
})
