import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      theme: 'light',
      primaryColor: '#409eff'
    }
  },
  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    },
    // 主题颜色
    setDefaultTheme() {
      this.theme = '#409eff'
    },
    changePrimaryColor(colorHex: string) {
      this.primaryColor = colorHex
    }
  },
  persist: {
    beforeRestore: (ctx) => {
      console.log('beforeRestore', ctx)
    }
  }
})
