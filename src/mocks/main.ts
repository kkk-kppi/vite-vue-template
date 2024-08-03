import { setupWorker } from 'msw/browser'
import { UserHandles } from './modules/user'
import { infoLogger } from '@/common/logger'

export const browserWorker = setupWorker(...UserHandles)

export async function setupMockWorker() {
  if (import.meta.env.DEV) {
    await browserWorker.start()
    infoLogger('Application use mock plugin [msw]')
  }
}
