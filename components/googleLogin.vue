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
import firebase from '@/plugins/firebase'

const provider = new firebase.auth.GoogleAuthProvider()

export default {

  mounted() {
    const self = this
    firebase.auth().getRedirectResult()
      .then((result) => {
        if (result.credential) {
          console.log(`Token: ${result.credential.accessToken}`)
        }
        console.log(`User: ${JSON.stringify(result.user)}`)
        self.$store.dispatch('setUser', result.user)
        self.$router.push('/books')
      })
      .catch((e) => {
        /*
        this.errorCode = error.code
        this.errorMessage = error.message
        this.email = error.email
        this.credential = error.credential
        */
        console.log(`Error: ${e}`)
      })
  },

  methods: {
    googleLogin() {
      firebase.auth().signInWithRedirect(provider)
    }
  }

}
</script>

<style>

</style>
