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
        <h1 class="section-header text">Избранное</h1>
        <ResultsElement :items="items" />
    </div>
</template>

<style scoped>
.section-header {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: clamp(36px, 5vw, 72px);
    line-height: 84px;
    text-align: center;
    color: #000000;

    padding-top: max(5vw, 40px);
}
</style>
