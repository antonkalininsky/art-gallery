<script setup>
import { ref } from "@vue/reactivity";
import HeaderElement from "./elements/HeaderElement.vue";
import ResultsElement from "./elements/ResultsElement.vue";
import { useRequestStore } from "../stores/requestStore";

const requestStore = useRequestStore();
const items = ref([]);

requestStore
    .getFavouriteItems()
    .then((res) => (items.value = res))
    .catch((err) => console.log(err));
</script>

<template lang="">
    <div>
        <HeaderElement />
        <h1 class="section-header text">Избранное</h1>
        <Suspense>
            <ResultsElement :items="items" />
        </Suspense>
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
