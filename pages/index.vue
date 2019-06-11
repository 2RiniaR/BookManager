<template>
  <v-container>
    <v-layout row wrap>
      <h1 class="title">
        VentureLabo Manager
      </h1>
      <h2 class="subtitle">
        茨城高専 起業部ホームページへようこそ！
      </h2>
      <div class="links">
        <googleLogin />
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import googleLogin from '~/components/googleLogin.vue'

export default {
  components: {
    googleLogin
  }
}
</script>
