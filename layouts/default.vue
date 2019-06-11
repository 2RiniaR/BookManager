<template>
  <v-app>
    <globalHeader />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import globalHeader from '~/components/globalHeader.vue'

export default {
  components: {
    globalHeader
  }
}
</script>
