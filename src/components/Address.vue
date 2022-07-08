<template>
  <div>
    <label>
      Address:
      <input type="text" v-model="value">
    </label>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Address",
    data() {
      return {
        value: ''
      }
    },
    activated() {
      // window.alert('Enter your address, please!')
      console.log('Address component is activated');
    },
    deactivated() {
      console.log('Address component is deactivated');
    }
  }
</script>