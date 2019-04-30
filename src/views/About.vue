<template lang="pug">
  .about
    p Pugtest
</template>
<script>
export default {
  created(){
    console.log(process.nev.VUE_APP_API);
  }
}
</script>
<style lang="scss" scoped>
  .about {
    width:100%;
    p{
      font-size:15px;
    }
  }
</style>
