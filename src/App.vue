<template>
  <div id="app">
    <TheHeader></TheHeader>
    <TheMain @printResults="printTheResults"></TheMain>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain,
  },
  data() {
    return {
      moviesList: [],
    }
  },
	methods: {
		printTheResults() {
      moviesList.push(this.moviesList);
		}
	},

}

</script>

<style lang="scss">

</style>
