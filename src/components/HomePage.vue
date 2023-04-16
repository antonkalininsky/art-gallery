<script setup>
import HeaderElement from "./elements/HeaderElement.vue";
import SearchElement from "./elements/SearchElement.vue";
import ResultsElement from "./elements/ResultsElement.vue";
import { useGeneralStore } from "@/stores/general";
const store = useGeneralStore();
store.getRandomImages();
</script>

<template lang="">
    <div>
        <HeaderElement :hideSearch="true" />
        <SearchElement />
        <ResultsElement :items="store.shownResults" />
    </div>
</template>

<style scoped></style>
