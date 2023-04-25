<script setup>
import CardElement from "../units/CardElement.vue";
import { useGeneralStore } from "@/stores/general";
const store = useGeneralStore();

const props = defineProps(["items"]);
</script>

<template lang="">
    <div class="results wrap-prop">
        <h2 class="results__empty text" v-if="props.items.length === 0 && !store.isLoading">
            Ничего не найдено
        </h2>
        <div class="results__grid" v-if="!store.isLoading">
            <CardElement :data="item" v-for="item in props.items" />
        </div>
        <div class="results__loading" v-if="store.isLoading">
            <img
                src="@/assets/img/icons/loader.svg"
                alt=""
                class="results__loading-img"
            />
        </div>
        <button class="results__scroll">
            <img
                src="@/assets/img/icons/arrow.svg"
                alt=""
                class="results__scroll-img"
            />
        </button>
    </div>
</template>

<style scoped>
.results {
    box-sizing: border-box;
    padding-top: max(6vw + 16px, 45px);
}

.results__empty {
    color: #000;
    font-size: 26px;
    font-weight: 900;
}

.results__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 27px;
    padding-bottom: 70px;
}

.results__item {
    border-radius: 6px;
    overflow: hidden;

    background-color: #000;
    cursor: pointer;
}

.results__img {
    transition: opacity 0.2s linear;
}

.results__item:hover .results__img {
    opacity: 0.3;
}

.results__img_vertical {
    width: 100%;
    height: auto;
}

.results__img_horisontal {
    width: auto;
    height: 100%;
}

.results__loading {
    width: fit-content;
    padding-bottom: 40px;
    margin: 0 auto;
}

.results__scroll {
    display: none;

    position: fixed;
    right: 50px;
    bottom: 50px;

    width: 49px;
    height: 49px;
    background: #ffffff;
    border: 0;
    border-radius: 8px;

    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
}

@media (max-width: 992px) { 
    .results__grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 767px) {

    .results__grid {
        grid-template-columns: 1fr;
    }
}

</style>
