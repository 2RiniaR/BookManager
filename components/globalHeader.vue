<template>
  <v-toolbar color="primary" app>
    <v-toolbar-title>Venture Labo</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/books">
        Books
      </v-btn>
      <v-btn flat @click="Logout">
        Logout
      </v-btn>
      <userIcon v-if="isAuthenticated" />
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import auth from '@/plugins/auth'
import { mapGetters } from 'vuex'
import userIcon from '~/components/userIcon.vue'

export default {

  components: {
    userIcon
  },

  computed: {
    ...mapGetters([
      'isAuthenticated'
    ])
  },

  async mounted() {
    const self = this
    await auth.auth()
      .then((user) => {
        console.log(`User: ${JSON.stringify(user)}`)
        self.$store.dispatch('setUser', user)
      })
      .catch((e) => {
        console.log(`Error: ${e}`)
      })
  },

  methods: {
    async Logout() {
      const self = this
      await auth.logout()
        .then(() => {
          self.$router.push('/')
        })
    }
  }

}
</script>

<style>

</style>
