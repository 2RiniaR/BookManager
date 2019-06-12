<template>
  <div class="bookinfo">
    <v-card>
      <h1 class="display-1">
        {{ book.name }}
      </h1>
      <h2 class="sub-header">
        {{ displayState(book.state) }}
      </h2>
      <template v-if="book.state != 0">
        <h3 class="body-2">
          借りている人: {{ book.borrowing_user_id }}
        </h3>
        <h3 class="body-2">
          借りている期間: {{ book.borrowed_at }}
        </h3>
      </template>
    </v-card>
  </div>
</template>

<script>
export default {
  props: [
    // eslint-disable-next-line
    'book'
  ],

  methods: {
    displayState(state) {
      switch (state) {
        case 0:
          return 'OK: 借りることができます'
        case 1:
          return 'NG: 貸し出し中です'
        default:
          return 'NG: 現在ありません'
      }
    }
  }
}
</script>

<style>

</style>
