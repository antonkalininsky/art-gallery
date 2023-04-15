<script setup>
import HeaderElement from "./elements/HeaderElement.vue";
import SearchElement from "./elements/SearchElement.vue";
import ResultsElement from "./elements/ResultsElement.vue"
</script>

<template lang="">
    <div>
        <HeaderElement :hideSearch="true" />
        <SearchElement />
        <ResultsElement />
    </div>
</template>

<style scoped>

</style>
