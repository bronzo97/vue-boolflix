<template>
    <div>
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="$emit('printResults', fetchMoviesList())">Button</button>
        </div>
        </div>
    </div>
</template>

<script>

// Import Axios
import axios from "axios";

export default {

    data() {
        return{
            basicApiUrlMovies: 'https://api.themoviedb.org/3/search/movie',
            moviesList: [],
        }
    },
    methods: {
        fetchMoviesList() {
        axios.get(this.basicApiUrlMovies, {
            params: {
                api_key: "085e3509ebd86b152aa226428d23cddb",
                query: 'skyfall',
                language: 'it',
            },
        })
        .then((resp) => {

            this.moviesList = resp.data.results;
            // this.$emit('printResults', this.moviesList);
            
        });
    // console.log(this.moviesList);
    },

    },
    mounted() {
        this.fetchMoviesList();
    }
}
</script>

<style lang="scss" scoped>

</style>