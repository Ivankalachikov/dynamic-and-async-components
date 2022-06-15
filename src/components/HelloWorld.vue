<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, veritatis pariatur ipsam dolorem numquam est, nesciunt repudiandae esse impedit nisi sit fuga doloremque tempore architecto ipsa quos quam minus assumenda ad molestias harum quae atque. Nesciunt architecto corrupti accusantium, sequi facilis amet consequatur neque illum necessitatibus commodi est saepe? Quidem, accusantium est. Dolorum, nam odio corrupti beatae veritatis tempora officia voluptatum, ipsum fugiat adipisci ullam perspiciatis laboriosam blanditiis qui explicabo? Magni, maiores! Fuga eius quisquam unde aspernatur asperiores sunt accusantium voluptatem, maxime ducimus cumque, itaque iusto illum repellendus. Maiores quisquam minima dolore, qui modi amet nobis consequatur laborum aspernatur eveniet.</p>
    <hr />
    <input v-debounce="500" type="text" placeholder="What do you think about custom directives?" v-model.lazy="opinion">
    <p>Your opinion: {{ opinion }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      opinion: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  padding: 10px 15px;
  width: 400px;
}
hr {
  margin: 40px 0;
}
</style>
