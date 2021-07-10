<template>
  <div>
    <div v-if="isStoreInitialized">Timestamp in mounted: {{ timestamp }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { getFakeModule } from '~/store'

@Component({
  async mounted(this: ImperativeActionPage) {
    const fakeModule = getFakeModule(this.$store)

    if (!this.isStoreInitialized) {
      await fakeModule.getState('imperative action page')
    }

    this.timestamp = fakeModule.timestamp
  },
})
export default class ImperativeActionPage extends Vue {
  timestamp = 0

  get isStoreInitialized(): boolean {
    return getFakeModule(this.$store).isInitialized
  }
}
</script>
