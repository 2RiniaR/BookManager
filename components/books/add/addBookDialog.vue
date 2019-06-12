<template>
  <v-card class="add-book-dialog">
    <v-form
      class="pa-3"
      @submit.prevent="onSubmit"
    >
      <v-text-field
        v-model="bookname"
        label="本のタイトル"
        :rules="requireRules"
        single-line
        required
        @keyup.enter.ctrl="onClick"
      />
    </v-form>

    <v-layout column class="py-2">
      <v-flex xs5 align-content-end>
        <v-btn
          color="accent"
          @click="onClick"
        >
          本の追加 (Ctrl + Enter)
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {

  data() {
    return {
      bookname: '',
      requireRules: [
        v => !!v || '記入は必須です。'
      ]
    }
  },

  methods: {
    onClick() {
      this.$emit('bookadd_submit', this.bookname)
      this.bookname = ''
    }
  }

}
</script>

<style>

</style>
