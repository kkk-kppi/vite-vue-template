import { defineStore } from 'pinia'

const sessionStorageKey: string = import.meta.env.VITE_APP_TITLE + ' [tab-bar]'

function getTabBarSessionStorage() {
  return JSON.parse(sessionStorage.getItem(sessionStorageKey) || '[]')
}
function updateTabBarSessionStorage(tabBar: any) {
  sessionStorage.setItem(sessionStorageKey, JSON.stringify(tabBar))
}

interface TabBarState {
  current: string | number | undefined
  hidden: boolean
  tabBars: Array<any>
  keyPaths: Array<string>
  keyPathsRoutes: Array<any>
}

const useTabBarStore = defineStore('tab-bar', {
  state: (): TabBarState => ({
    current: undefined,
    hidden: true,
    tabBars: [],
    keyPaths: [],
    keyPathsRoutes: []
  }),
  getters: {
    // get current value
    getCurrent: (state) => state.current,
    // get tabBars value
    getTabBars: (state: TabBarState) => state.tabBars,
    // get keyPaths value
    getKeyPaths: (state: TabBarState) => state.keyPaths,
    // get keyPathsRoutes value
    getKeyPathsRoutes: (state: TabBarState) => state.keyPathsRoutes,
    // get tabBars sessionStorage value
    getTabBarSessionStorage: () => getTabBarSessionStorage()
  },
  actions: {
    // helper methods
    actionUpdateStorage() {
      updateTabBarSessionStorage(this.tabBars)
    },

    // store tabBars methods
    resetAppTabBar() {
      this.hidden = true
      this.current = undefined
      this.tabBars = []
      this.keyPaths = []
      this.keyPathsRoutes = []

      this.actionUpdateStorage()
    },
    // state useTabBarStore methods
    resetTabBar() {
      this.tabBars = []

      this.actionUpdateStorage()
    },
    setTabBar(tabBars: any) {
      this.tabBars = tabBars

      this.actionUpdateStorage()
    },
    addTabBar(tabBar: any) {
      this.tabBars.push(tabBar)

      this.actionUpdateStorage()
    },
    removeTabBar(tabBarKey: string): Promise<any> {
      return new Promise((resolve) => {
        this.tabBars = this.tabBars.filter((item) => item?.key !== tabBarKey)

        this.actionUpdateStorage()

        resolve(this.tabBars)
      })
    },
    // state current methods
    resetCurrent() {
      this.current = undefined
    },
    setCurrent(current: string | number | undefined) {
      this.current = current
    },
    // state keyPaths methods
    resetKeyPaths() {
      this.keyPaths = []
    },
    setKeyPaths(keyPaths: Array<string>) {
      this.keyPaths = keyPaths
    },
    // state keyPathsRoutes methods
    resetKeyPathsRoutes() {
      this.keyPathsRoutes = []
    },
    setKeyPathsRoutes(keyPathsRoutes: Array<any>) {
      this.keyPathsRoutes = keyPathsRoutes
    }
  }
})

export default useTabBarStore
