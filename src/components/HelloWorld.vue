<template>
  <div class="hello">

    <h1>{{ msg }}</h1>

    <button @click="increaseCountToTruncate">+</button>
    <button @click="decreaseCountToTruncate">-</button>

    <p v-truncate="countToTruncate">Count to truncate: {{ countToTruncate }}.<br /> In addition to the default set of directives shipped in core (v-model and v-show), Vue also allows you to register your own custom directives. Note that in Vue 2.0, the primary form of code reuse and abstraction is components - however there may be cases where you need some low-level DOM access on plain elements, and this is where custom directives would still be useful.</p>

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
      countToTruncate: 5,
      opinion: '',
    }
  },
  methods: {
    decreaseCountToTruncate() {
      this.countToTruncate = this.countToTruncate > 1 ? this.countToTruncate - 1 : 1;
    },
    increaseCountToTruncate() {
      this.countToTruncate += 1;
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
  max-width: 700px;
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
.with-gradient {
  position: relative;
}
.with-gradient::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1));
  }
</style>
