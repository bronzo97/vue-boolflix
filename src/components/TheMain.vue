<template>
    <div>
        <h1>Movies:</h1>
        <ul>
            <li v-for="movie in moviesList" :key="movie.id">
                <div>Movie title: {{movie.title}}</div>
                <span class="fi" :class="'fi-' + countryFlag"></span>
                <div>Movie original title: {{movie.original_title}}</div>
                <div>Movie original language: {{movie.original_language}}</div>
                <div>Movie vote: {{movie.vote_average}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        moviesList: Array
    },
    data() {
        return{

        }
    },
    methods: {

    },
    computed: {
        countryFlag() {
            return this.movie.original_language;
        },
    }
    }


</script>

<style scoped>

</style>