<template>
<router-view v-slot="{ Component }">
  <keep-alive include="Intro">
    <component :is="Component" />
  </keep-alive>
</router-view>
</template>

<script>

</script>

<style>

</style>


