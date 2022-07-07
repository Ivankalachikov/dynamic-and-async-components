<template>
  <div class="hello">
    <h1>Dynamic and async components</h1>
    <div class="form">
      <transition name="slide" mode="out-in">
        <keep-alive exclude="Card">
          <component :is="currentComponent" />
        </keep-alive>
      </transition>
    </div>
    <button @click="prevStep" :disabled="currentStep === 0">
      Prev
    </button>
    <button @click="nextStep" :disabled="currentStep + 1 === allSteps.length">
      Next
    </button>
  </div>
</template>

<script>
import Address from './Address'
import Spinner from './Spinner'
import Error from './Error'

const allSteps = [
  'Name', 
  Address,
  'Card',
  'ThankYou',
];

export default {
  components: { 
    Address,
    Card: () => ({
      component: new Promise((resolve) => 
        setTimeout(() => {
          resolve(import('./Card'))
        }, 1500)
      ),
      loading: Spinner,
    }),
    Name: () => import('./Name'),
    ThankYou: () => ({
      component: new Promise((resolve, reject) => 
        setTimeout(() => {
          reject();
        }, 1500)
      ),
      loading: Spinner,
      error: Error,
    }),
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      allSteps: allSteps,
      currentStep: 0,
    }
  },
  computed: {
    currentComponent() {
      return allSteps[this.currentStep];
    }
  },
  methods: {
    nextStep() {
      this.currentStep += 1;
    },
    prevStep() {
      this.currentStep -= 1;
    },
  }
}
</script>

<style scoped>
::v-deep label {
  display: block;
  margin-bottom: 4px;
  text-align: left;
}
::v-deep input {
  padding: 10px 15px;
  display: block;
  width: 100%;
  box-sizing: border-box;
}
h1 {
  color: #444;
  margin-bottom: 40px;
  font-weight: 400;
}
button {
  padding: 5px 10px;
  margin: 5px;
}
img {
  height: 40px;
  width: 40px;
}
.form {
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}
.slide-leave-active,
.slide-enter-active {
  transition: 0.2s;
}
.slide-enter {
  transform: translate(100%, 0);
  opacity: 0;
}
.slide-leave-to {
  transform: translate(-100%, 0);
  opacity: 0;
}
</style>
