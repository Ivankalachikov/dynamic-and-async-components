<template>
  <div>
    <label>
      Card number:
      <input type="text" v-model="value">
    </label>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Card",
    data() {
      return {
        value: ''
      }
    },
  }
</script>