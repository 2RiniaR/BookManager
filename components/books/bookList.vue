<template>
  <div class="book-list">
    <v-text-field
      v-model="search"
      class="my-3"
      append-icon="search"
      label="Search"
      single-line
      hide-details
    />
    <v-data-table
      :headers="headers"
      :items="books"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <tr
          :style="{ 'cursor': 'pointer' }"
          @click="$router.push(`/books/${props.item.id}`)"
        >
          <td class="text-xs-right">
            {{ props.item.name }}
          </td>
          <td class="text-xs-right">
            {{ displayState(props.item.state) }}
          </td>
          <td class="text-xs-right">
            {{ props.item.borrowing_user_id }}
          </td>
          <td class="text-xs-right">
            {{ props.item.borrowed_at }}
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
const headers = [
  { text: 'Name', value: 'name' },
  { text: 'State', value: 'state' },
  { text: 'Borrowing User', value: 'borrowing_user' },
  { text: 'Borrowed At', value: 'borrowed_at' }
]

export default {

  props: [
    // eslint-disable-next-line
    'books'
  ],

  data() {
    return {
      search: '',
      headers
    }
  },

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
