const MOCK_COOKIE_KEY = 'msw-mock-cookie'
const MOCK_COOKIE_VALUE = 'test-cookie-in-2408'

export default {
  get: () => {
    return localStorage.getItem(MOCK_COOKIE_KEY)
  },
  set: () => {
    localStorage.setItem(MOCK_COOKIE_KEY, MOCK_COOKIE_VALUE)
  },
  remove: () => {
    localStorage.removeItem(MOCK_COOKIE_KEY)
  }
}
