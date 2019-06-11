<template>
  <div class="user-icon">
    <v-layout fill-height align-center>
      <v-flex>
        <v-tooltip bottom>
          <span>{{ authUser['displayName'] }}</span>
          <template v-slot:activator="{ on }">
            <v-avatar
              size="48"
              color="primary"
              class="mx-2"
              v-on="on"
            >
              <v-img
                :src="authUser['photoURL']"
                :alt="authUser['displayName']"
              />
            </v-avatar>
          </template>
        </v-tooltip>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isAuthenticated',
      'authUser'
    ])
  }
}
</script>

<style>

</style>
