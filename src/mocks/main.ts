import { setupWorker } from 'msw/browser'
import { UserHandles } from './modules/user'

export const browserWorker = setupWorker(...UserHandles)

export async function setupMockWorker() {
  if (import.meta.env.DEV) {
    await browserWorker.start()
  }
}
