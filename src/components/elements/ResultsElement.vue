<script setup>
import CardElement from "../units/CardElement.vue";
import { useGeneralStore } from "@/stores/general"
const store = useGeneralStore();

const props = defineProps(["items"]);
</script>

<template lang="">
    <div class="results wrap-prop">
        <div class="results__grid" v-if="!store.isLoading">
            <CardElement :data="item" v-for="item in props.items"/>
        </div>
        <div class="results__loading" v-if="store.isLoading">
            <img
                src="@/assets/img/icons/loading.png"
                alt=""
                class="results__loading-img"
            />
        </div>
        <button class="results__scroll">
            <img
                src="@/assets/img/icons/arrow.png"
                alt=""
                class="results__scroll-img"
            />
        </button>
    </div>
</template>

<style scoped>
.results {
    width: fit-content;
    padding-top: 122px;
}
.results__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 27px;
    grid-template-rows: repeat(auto-fill, 0.5fr);
    padding-bottom: 70px;
}

.results__item {
    width: 473.72px;
    height: 453.74px;
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

@media screen and (max-width: 1600px) {
    .results__item {
        width: 360px;
        height: 330px;
    }
}

@media screen and (max-width: 1200px) {
    .results__grid {
        grid-template-columns: 1fr 1fr;
    }

    .results__item {
        width: 473px;
        height: 440px;
    }
}

@media screen and (max-width: 1050px) {
    .results__item {
        width: 360px;
        height: 330px;
    }
}

@media screen and (max-width: 820px) {
    .results__grid {
        grid-template-columns: auto;
    }

    .results__item {
        width: 550px;
        height: 500px;
    }
}

@media screen and (max-width: 700px) {
    .results {
        padding-top: 50px;
    }
    .results__item {
        width: 335px;
        height: 311px;
    }
}
</style>
