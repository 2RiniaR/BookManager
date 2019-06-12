<template>
  <div class="book-index">
    <bookInfo :book="book" />
    <bookBorrowButton
      v-if="book.state == 0"
      @book_borrow="borrow"
    />
    <bookBackButton
      v-if="book.state != 0"
      @book_back="back"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from '@/plugins/firebase.js'
import bookInfo from '~/components/books/info/bookInfo'
import bookBorrowButton from '~/components/books/borrow/bookBorrowButton'
import bookBackButton from '~/components/books/back/bookBackButton'

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
    bookInfo,
    bookBorrowButton,
    bookBackButton
  },

  computed: {
    ...mapGetters([
      'authUser'
    ])
  },

  async asyncData({ params }) {
    const book = await firestore.collection('books').doc(params.id).get()
      .then((doc) => {
        if (!doc.exists) return null
        const data = doc.data()
        return {
          'id': doc.id,
          'name': data.name,
          'state': data.state,
          'borrowing_user_id': data.borrowing_user_id,
          'borrowed_at': timestampToYMD(data.borrowed_at)
        }
      })
      .catch((e) => {
        console.log('Error : ', e)
      })
    return { book }
  },

  methods: {

    async borrow() {
      await firestore.collection('books').doc(this.book.id).update({
        'state': 1,
        'borrowing_user_id': this.authUser.displayName,
        'borrowed_at': new Date()
      })
        .then(this.reload)
    },

    async back() {
      await firestore.collection('books').doc(this.book.id).update({
        'state': 0,
        'borrowing_user_id': null,
        'borrowed_at': null
      })
        .then(this.reload)
    },

    async reload() {
      const book = await firestore.collection('books').doc(this.$nuxt.$route.params.id).get()
        .then((doc) => {
          if (!doc.exists) return null
          const data = doc.data()
          return {
            'id': doc.id,
            'name': data.name,
            'state': data.state,
            'borrowing_user_id': data.borrowing_user_id,
            'borrowed_at': timestampToYMD(data.borrowed_at)
          }
        })
        .catch((e) => {
          console.log('Error : ', e)
        })
      this.book = book
    }

  }

}
</script>

<style>

</style>
