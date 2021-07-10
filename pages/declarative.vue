<template>
  <div>
    <div v-if="isStoreInitialized">Page timestamp: {{ timestamp }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { getFakeModule } from '~/store'

@Component
export default class DeclarativePage extends Vue {
  get timestamp(): number {
    return getFakeModule(this.$store).timestamp
  }

  get isStoreInitialized(): boolean {
    return getFakeModule(this.$store).isInitialized
  }
}
</script>
