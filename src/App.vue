<template lang="pug">
    #app
      Header
      .content-wrapper
        router-view
</template>

<style lang="scss">

</style>

<script>
import Header from '@/components/header.vue'

export default {
  components: {
    Header
  }
}
</script>
