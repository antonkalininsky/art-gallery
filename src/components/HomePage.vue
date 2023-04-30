<script setup>
import HeaderElement from "./elements/HeaderElement.vue";
import SearchElement from "./elements/SearchElement.vue";
import ResultsElement from "./elements/ResultsElement.vue";
import { useSearchStore } from "../stores/searchStore";
import { useRequestStore } from "../stores/requestStore";

const searchStore = useSearchStore();
const requestStore = useRequestStore();

requestStore
    .getRandomImages()
    .then((data) => {
        searchStore.shownResults = data;
    })
    .catch((err) => console.log(err));
</script>

<template lang="">
    <div>
        <HeaderElement :hideSearch="true" />
        <SearchElement />
        <Suspense>
            <ResultsElement :items="searchStore.shownResults" />
        </Suspense>
    </div>
</template>

<style scoped></style>
