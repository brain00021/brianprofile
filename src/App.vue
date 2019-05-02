<template lang="pug">
    #app
      #nav
        router-link(to='/travel') Travel
        |  |
        router-link(to='/bmi') BMI
      .content-wrapper
        router-view
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  background:#fff;
  position: fixed;
  width:100%;
  padding: 15px;
  text-align: right;
  z-index: 10;
  box-shadow: 0 0  10px rgba(#000,.5);
  top:0;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.content-wrapper{
  position: relative;
  margin-top: 54px;
}
</style>
