<template>
    <div>
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search for a movie or TV serie" aria-label="Search for a movie or TV serie" aria-describedby="basic-addon2" v-model="userInput" @keyup.enter="$emit(startSearch())">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="$emit(startSearch())">Button</button>
        </div>
        </div>
    </div>
</template>

<script>

export default {

    data() {
        return{
            userInput: "",
        };
    },
    methods: {
        startSearch() {
            this.$emit("searchTextChanged", this.userInput)
        },


    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped>

</style>