<template>
  <div class="book-index">
    <bookList />
  </div>
</template>

<script>
import bookList from '~/components/books/bookList.vue'

export default {
  middleware: [
    'authenticated'
  ],

  components: {
    bookList
  }
}
</script>

<style>

</style>
