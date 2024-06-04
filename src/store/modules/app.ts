import { defineStore } from "pinia";
import { ref } from "vue";

const useAppStore = defineStore("app", () => {
  const isDark = ref(false);
  const toggleDark = () => {
    isDark.value = !isDark.value;
  };
  return { isDark, toggleDark };
})

export default useAppStore;