<template>
  <div>
    <label>
      Name:
      <input type="text" v-model="value">
    </label>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Name",
    data() {
      return {
        value: ''
      }
    },
  }
</script>