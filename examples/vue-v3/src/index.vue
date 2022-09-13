<script lang="ts">
import Test from './test.vue'
export default {
  name: 'Hello',
  components: {
    Test,
  },

  props: {},

  created() {

  },
}
</script>

<template>
  <div>
    <Test test-a="1" />
  </div>
</template>

<style></style>
