<template>
  <v-btn
    color="#6688ff"
    @click="googleLogin"
  >
    <h2 class="body-1 white--text">
      Googleでログイン
    </h2>
  </v-btn>
</template>

<script>
import auth from '@/plugins/auth'

export default {

  methods: {
    googleLogin() {
      auth.login()
        .then(() => {
          this.$router.push('/books')
        })
    }
  }

}
</script>

<style>

</style>
