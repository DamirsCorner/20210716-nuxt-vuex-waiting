<template>
  <div>
    <div>
      <nuxt-link to="declarative">Declarative dependency</nuxt-link>
    </div>
    <div>
      <nuxt-link to="imperative-action"
        >Imperative dependency: duplicate action call</nuxt-link
      >
    </div>
    <div>
      <nuxt-link to="imperative-wait"
        >Imperative dependency: wait for mutation</nuxt-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
