<template>
  <v-toolbar color="primary">
    <v-toolbar-title>Venture Labo</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/books">
        Books
      </v-btn>
      <userIcon v-if="isAuthenticated" />
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
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
  }

}
</script>

<style>

</style>
