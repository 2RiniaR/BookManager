<template>
  <div class="book-index">
    <addBookButton @book_add="bookAddSubmit" />
    <reloadBookButton @reload="reload" />
    <bookList :books="books" />
  </div>
</template>

<script>
import firebase from '@/plugins/firebase.js'
import bookList from '~/components/books/bookList.vue'
import addBookButton from '~/components/books/add/addBookButton'
import reloadBookButton from '~/components/books/reload/reloadBookButton'

const firestore = firebase.firestore()
function timestampToYMD(timestamp) {
  if (!timestamp) return null
  const d = new Date(parseInt(timestamp.seconds * 1000))
  console.log(d)
  const ymd = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
  const hours = (d.getHours() < 10) ? '0' + d.getHours() : d.getHours()
  const minutes = (d.getMinutes() < 10) ? '0' + d.getMinutes() : d.getMinutes()
  return `${ymd} ${hours}:${minutes}`
}

export default {
  middleware: [
    'authenticated'
  ],

  components: {
    bookList,
    addBookButton,
    reloadBookButton
  },

  async asyncData() {
    const books = await firestore.collection('books').get()
      .then((querySnapshot) => {
        const list = []
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          list.push({
            'id': doc.id,
            'name': data.name,
            'state': data.state,
            'borrowing_user_id': data.borrowing_user_id,
            'borrowed_at': timestampToYMD(data.borrowed_at)
          })
        })
        return list
      })
      .catch((e) => {
        console.log('Error : ', e)
      })
    console.log('books : ', books)
    return { books }
  },

  methods: {
    async getBooksData() {
      const books = await firestore.collection('books').get()
        .then((querySnapshot) => {
          const list = []
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            list.push({
              'id': doc.id,
              'name': data.name,
              'state': data.state,
              'borrowing_user_id': data.borrowing_user_id,
              'borrowed_at': timestampToYMD(data.borrowed_at)
            })
          })
          return list
        })
        .catch((e) => {
          console.log('Error : ', e)
        })
      return books
    },

    async bookAddSubmit(bookname) {
      await firestore.collection('books').add({
        name: bookname,
        borrowed_at: null,
        borrowing_user_id: null,
        state: 0
      })
        .then(this.reload)
    },

    async reload() {
      this.books = await this.getBooksData()
    }
  }

}
</script>

<style>

</style>
