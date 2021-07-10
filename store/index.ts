import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import FakeModule from './fake'

export function getFakeModule(store: Store<any>): FakeModule {
  return getModule(FakeModule, store)
}

export function waitForMutation(
  store: Store<any>,
  mutationType: string
): Promise<void> {
  return new Promise((resolve) => {
    const unsubscribe = store.subscribe((mutation, _state) => {
      if (mutation.type === mutationType) {
        unsubscribe()
        resolve()
      }
    })
  })
}
