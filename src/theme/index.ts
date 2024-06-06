import { useThemeStore } from '@/stores/modules/theme'
import { computed } from 'vue'

// init theme store
const themeStore = useThemeStore()

// toggle theme
export const useToggleTheme = () => {
  const toggleTheme = () => {
    themeStore.toggleTheme()
  }
  return { toggleTheme }
}

// change primary color or set default theme
export const usePrimaryColor = () => {
  const primaryColor = computed(() => themeStore.primaryColor)
  const changePrimaryColor = (color: string) => {
    themeStore.changePrimaryColor(color)
  }
  const setDefaultTheme = () => {
    themeStore.setDefaultTheme()
  }
  return {
    primaryColor,
    changePrimaryColor,
    setDefaultTheme
  }
}
