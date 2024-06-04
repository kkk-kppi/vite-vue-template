import { defineStore } from "pinia";
import { ref } from "vue";

const useThemeStore = defineStore("theme", () => {
  const theme = ref("light");
  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };
  return { theme, toggleTheme };
})

export default useThemeStore