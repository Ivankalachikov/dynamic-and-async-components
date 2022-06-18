<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    <hr />

    <p>
      <button @click="increaseCountToTruncate">+</button>
      <button @click="decreaseCountToTruncate">-</button>
      Count to truncate: {{ countToTruncate }}
    </p>
    <label>
      Truncate type:
      <select v-model="truncateType">
        <option value="lines">Lines</option>
        <option value="height">Height</option>
      </select>
    </label>

    <p v-truncate:[truncateType]="countToTruncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ex laborum dicta veniam possimus, quis cumque minima itaque sit suscipit, rem qui dolores facere placeat temporibus est. Omnis, quasi ipsam. Odio nam, velit aperiam libero esse aut ex quos, dicta unde obcaecati repudiandae reiciendis maxime, suscipit mollitia. Vitae, non enim ab provident impedit quibusdam, ducimus eaque aperiam distinctio sit sequi incidunt magnam dignissimos, corporis saepe delectus placeat. Doloremque laborum soluta dicta. Ex voluptatibus rerum consequuntur, ipsum in molestiae cupiditate blanditiis repellat libero commodi voluptatem quas temporibus deserunt ab sequi maxime sit? Incidunt, officia! Illum officia, sunt at quod a natus.</p>

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
      truncateType: 'lines',
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
select {
  padding: 5px 10px;
}
hr {
  margin: 40px 0;
}
p {
  max-width: 600px;
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
