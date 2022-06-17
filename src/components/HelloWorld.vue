<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="increaseLinesToTruncate">+</button>
    <button @click="decreaseLinesToTruncate">-</button>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, veritatis pariatur ipsam dolorem numquam est, nesciunt repudiandae esse impedit nisi sit fuga doloremque tempore architecto ipsa quos quam minus assumenda ad molestias harum quae atque. Nesciunt architecto corrupti accusantium, sequi facilis amet consequatur neque illum necessitatibus commodi est saepe? Quidem, accusantium est. Dolorum, nam odio corrupti beatae veritatis tempora officia voluptatum, ipsum fugiat adipisci ullam perspiciatis laboriosam blanditiis qui explicabo? Magni, maiores!</p>
    
    <hr />
    <input type="text" placeholder="What do you think about custom directives?" v-model="opinion">
    <p v-if="opinion.length > 0" class="opinion">Your opinion:</p>
    <p class="opinion">{{ opinion }}</p>
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
      linesToTruncate: 5,
      opinion: '',
    }
  },
  methods: {
    decreaseLinesToTruncate() {
      this.linesToTruncate = this.linesToTruncate > 1 ? this.linesToTruncate - 1 : 1;
    },
    increaseLinesToTruncate() {
      this.linesToTruncate += 1;
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
p {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
button {
  padding: 5px 10px;
  margin: 5px;
}
.opinion {
  width: 100px;
  word-wrap: break-word;
}
</style>
