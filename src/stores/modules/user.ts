import { defineStore } from 'pinia'

interface RoleItem {
  name: string
  permissions: Array<string>
}

interface UserIdentity {
  id?: string
  name?: string
  avatar?: string
  roles?: Array<RoleItem>
}

interface UserState {
  identity: UserIdentity
  token?: string | null
  session?: string | null
  permissions: Array<string>
}

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    identity: {},
    token: null,
    session: null,
    permissions: []
  }),
  getters: {
    getToken: (state: UserState) => {
      return state.token
    },
    getSession: (state: UserState) => {
      return state.session
    },
    getIdentity: (state: UserState) => {
      return state.identity
    },
    getPermissions: (state: UserState) => {
      return state.permissions
    }
  },
  actions: {
    // app user identity
    resetIdentity() {
      this.identity = {}
    },
    updateIdentity(identity: UserIdentity) {
      this.identity = identity
    },
    // app user token
    resetToken() {
      this.token = null
    },
    updateToken(token: string) {
      this.token = token
    },
    // app user session
    resetSession() {
      this.session = null
    },
    updateSession(session: string) {
      this.session = session
    },
    // app user permissions
    resetPermissions() {
      this.permissions = []
    },
    updatePermissions(permissions: Array<string>) {
      this.permissions = permissions
    }
  }
})

export default useUserStore
