<template>
  <QuizComponent />
</template>

<script>
import QuizComponent from "./components/progressBar/QuizComponent.vue";
export default {
  name: "App",
  components: {
    QuizComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #15171a;
  margin-top: 20px;
}
</style>

