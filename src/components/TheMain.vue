<template>
    <div>
        <h1>Movies:</h1>
        <ul>
            <li v-for="movie in moviesList" :key="movie.id">
                <div>Title: {{movie.title}}
                    <span><lang-flag :iso="movie.original_language" :squared="false"/></span>
                </div>
                <div>Original title: {{movie.original_title}}</div>
                <div>Original language: {{movie.original_language}}</div>
                <div>Vote: {{movie.vote_average}}</div>
            </li>
        </ul>
        <h1>Tv Shows:</h1>
        <ul>
            <li v-for="serie in seriesList" :key="serie.id">
                <div>Title: {{serie.name}}
                    <span><lang-flag :iso="serie.original_language" :squared="false"/></span>
                </div>
                <div>Original title: {{serie.original_name}}</div>
                <div>Original language: {{serie.original_language}}</div>
                <div>Vote: {{serie.vote_average}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        moviesList: Array, 
        seriesList: Array
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