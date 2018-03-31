<template>
  <div class="foot-btn">
    <ul>
      <!--<li class="home"><a href="/home"></a></li>
      <li class="write"><a href="/follow"></a></li>
      <li class="my"><a href="/user-info"></a></li>-->
      <router-link tag="li" class="home" to="/home">
        <a href="javascript:;"></a>
      </router-link>
      <router-link tag="li" class="write" to="/follow">
        <a href="javascript:;"></a>
      </router-link>
      <router-link tag="li" class="my" to="/user-info">
        <a href="javascript:;"></a>
      </router-link>
    </ul>
  </div>

</template>

<script>
  export default {
    name: "foot"
  }
</script>

<style scoped>

</style>
