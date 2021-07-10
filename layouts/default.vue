<template>
  <div>
    <div v-if="isStoreInitialized">Header timestamp: {{ timestamp }}</div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { getFakeModule } from '~/store'

@Component({
  async mounted(this: DefaultLayout) {
    await getFakeModule(this.$store).getState('default layout')
  },
})
export default class DefaultLayout extends Vue {
  get timestamp(): number {
    return getFakeModule(this.$store).timestamp
  }

  get isStoreInitialized(): boolean {
    return getFakeModule(this.$store).isInitialized
  }
}
</script>
