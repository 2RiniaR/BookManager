<template>
  <div class="add-book-button">
    <v-btn
      color="success"
      @click="isActive = true"
    >
      本の追加
    </v-btn>
    <v-dialog
      v-model="isActive"
      width="600"
      z-index="10"
    >
      <addBookDialog
        @bookadd_submit="bookAddSubmit"
      />
    </v-dialog>
  </div>
</template>

<script>
import addBookDialog from '~/components/books/add/addBookDialog'

export default {

  components: {
    addBookDialog
  },

  data() {
    return {
      isActive: false
    }
  },

  methods: {
    bookAddSubmit(bookname) {
      this.$emit('book_add', bookname)
      this.isActive = false
    }
  }

}
</script>

<style>

</style>
