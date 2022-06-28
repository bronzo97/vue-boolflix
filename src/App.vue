<template>
  <div id="app">
    <TheHeader @printResults="printTheResults"></TheHeader>
    <TheMain ></TheMain>
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
      moviesListFather: [],
    }
  },
	methods: {
		printTheResults(resp) {
      console.log(this.moviesList);

		},
	},

}

</script>

<style lang="scss">

</style>
