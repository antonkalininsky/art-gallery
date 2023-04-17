<script setup>
import { ref } from "@vue/reactivity";
import HeaderElement from "./elements/HeaderElement.vue";
import ResultsElement from "./elements/ResultsElement.vue";
import { useGeneralStore } from "@/stores/general";
const store = useGeneralStore();

const items = ref([]);
store.getFavouriteItems().then(
    (result) => {
        items.value = result;
    },
    (error) => {
        console.log(error);
    }
);
</script>

<template lang="">
    <div>
        <HeaderElement />
        <h1 class="header text">Избранное</h1>
        <ResultsElement :items="items" />
    </div>
</template>

<style scoped></style>
