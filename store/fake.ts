import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({ name: 'fake', stateFactory: true, namespaced: true })
export default class FakeModule extends VuexModule {
  timestamp = 0

  get isInitialized(): boolean {
    return this.timestamp > 0
  }

  @Mutation
  setState(timestamp: number): void {
    this.timestamp = timestamp
  }

  @Action({ rawError: true })
  getState(caller: string): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const timestamp = Date.now()
        console.log(`*** getState: ${caller}, ${timestamp}`)
        this.setState(timestamp)
        resolve()
      }, 250)
    })
  }
}
