<template>
  <page-header></page-header>
  <div class="content">
    <router-view></router-view>
  </div>
  <page-footer></page-footer>
</template>

<script>
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'

export default {
  name: 'App',
  components: { PageHeader, PageFooter }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}

body {
  background-color: #121212;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.content {
  flex: 1;
}
</style>
