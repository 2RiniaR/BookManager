<template>
  <div>
    <v-btn
      color="success"
      @click="onClick"
    >
      更新
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('reload')
    }
  }
}
</script>

<style>

</style>
