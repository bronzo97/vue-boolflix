<template>
    <div>
        <h1>Movies:</h1>
        <ul>
            <li v-for="movie in moviesList" :key="movie.id">
                <div>Movie title: {{movie.title}}
                    <span><lang-flag :iso="movie.original_language" /></span>
                </div>
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

    }
    }


</script>

<style scoped>

</style>