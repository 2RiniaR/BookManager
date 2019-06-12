<template>
  <div class="book-borrow-button">
    <v-btn
      color="success"
      @click="$emit('book_borrow')"
    >
      借りる
    </v-btn>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
