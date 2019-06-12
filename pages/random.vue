<template>
  <div class="random-sheet">
    <v-btn
      v-if="!isActive"
      color="#22aa77"
      @click="onClick"
    >
      <h2 class="body-1">
        Start!!
      </h2>
    </v-btn>
    <v-layout row>
      <v-flex v-for="(col, i) in sit" :key="`col-${i}`" xs1>
        <v-layout column>
          <v-flex v-for="(s, j) in col" :key="`se-${j}`" xs1>
            <v-card class="ma-1" width="70">
              <h1 class="text-xs-center">
                {{ s }}
              </h1>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
const member = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]
const ar = [7, 7, 7, 6, 6, 6, 5]
function generateNum(len) { return Math.floor(Math.random() * len) }

export default {

  data() {
    return {
      isActive: false,
      sit: [[], [], [], [], [], [], []]
    }
  },

  methods: {
    onClick() {
      const self = this
      this.sit = [[], [], [], [], [], [], []]
      let mem = member
      for (let i = 0; i < self.sit.length; i++) {
        [...Array(ar[i])].map(() => {
          const a = generateNum(mem.length)
          self.sit[i].push(mem[a])
          console.log(mem[a])
          mem = mem.filter(n => n !== mem[a])
        })
      }
    }
  }

}
</script>

<style>

</style>
