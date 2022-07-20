<template>
  <page-header></page-header>
  <div>
    <router-view></router-view>
  </div>
  <div style="height: 800px;"></div>
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
</style>
