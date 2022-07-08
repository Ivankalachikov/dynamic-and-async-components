<template>
  <div class="hello">
    <h1>Dynamic and async components</h1>
    <div class="form">

      <component :is="`h${currentStep + 2}`">Step {{currentStep + 1}}</component>

      <transition name="slide" mode="out-in">

        <keep-alive :exclude="/^\w{4}$/">
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
import Error from './Error'
import Spinner from './Spinner'

const allSteps = [
  'Name', 
  Address,
  'Card',
  'ThankYou',
];

export default {
  components: { 
    Name: () => import('./Name'), // simple factory function, return Promise which is resolve with the component
    Card: () => ({ // factory function which return special object which can accept some additional options
      component: new Promise((resolve) => // should be a Promise
        setTimeout(() => {
          resolve(import('./Card'))
        }, 1500)
      ),
      delay: 200, // delay before showing the loading component, default: 200ms.
      error: Error,
      loading: Spinner,
      timeout: 3000 // default: Infinity
    }),
    ThankYou: () => ({
      component: new Promise((resolve) => 
        setTimeout(() => {
          resolve(import('./ThankYou'))
        }, 1500)
      ),
      delay: 200,
      error: Error,
      loading: Spinner,
      timeout: 3000
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
h2, h3, h4, h5 {
  text-align: left;
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
}
</style>
