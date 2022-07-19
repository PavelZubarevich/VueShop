<template>
  <page-header></page-header>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader'
export default {
  name: 'App',
  components: { PageHeader }
}
</script>

<style>
</style>
