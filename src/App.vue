<template>
  <div id="app">
    <TheHeader @searchTextChanged="onSearchTextChanged"></TheHeader>
    <TheMain :moviesList="moviesList" :seriesList="seriesList"></TheMain>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'
import axios from "axios";


export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain,
  },
  data() {
    return {
      moviesList: [],
      seriesList: [],
      searchText: '',
    }
  },
	methods: {
    onSearchTextChanged(userInput) {
      this.searchText = userInput;

        axios.get("https://api.themoviedb.org/3/search/movie", {
            params: {
                api_key: "085e3509ebd86b152aa226428d23cddb",
                query: userInput,
                language: 'it-IT',
            },
        })
        .then((resp) => {
          if (type === 'movie') {
        this.moviesList = resp.data.results; 
        } else {
          this.seriesList = resp.data.results
        }
        })
  },

  },
}

</script>

<style lang="scss">

</style>


