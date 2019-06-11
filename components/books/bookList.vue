<template>
  <div class="book-list">
    <v-data-table
      :headers="headers"
      :items="books"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-right">
          {{ props.item.id }}
        </td>
        <td class="text-xs-right">
          {{ props.item.name }}
        </td>
        <td class="text-xs-right">
          {{ props.item.state }}
        </td>
        <td class="text-xs-right">
          {{ props.item.borrowing_user }}
        </td>
        <td class="text-xs-right">
          {{ props.item.borrowed_at }}
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'State', value: 'state' },
        { text: 'Borrowing User', value: 'borrowing_user' },
        { text: 'Borrowed At', value: 'borrowed_at' }
      ],
      books: [
        {
          id: 1,
          name: '熱血アセンブリ',
          state: 0,
          borrowing_user: null,
          borrowed_at: null
        },
        {
          id: 2,
          name: 'ゼロから作るDeep Learning',
          state: 1,
          borrowing_user: 'st11d11',
          borrowed_at: '2019-05-03'
        },
        {
          id: 3,
          name: '入門 Python3',
          state: 1,
          borrowing_user: 'st12d12',
          borrowed_at: '2018-12-22'
        }
      ]
    }
  }
}
</script>

<style>

</style>
