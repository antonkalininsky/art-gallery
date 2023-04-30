<script setup>
import { ref } from "vue";
import CardUnit from "../units/CardUnit.vue";
import { useLoadingStore } from "../../stores/loadingStore";
const loadingStore = useLoadingStore();

const props = defineProps({
    items: {
        type: Array,
        default: [],
    },
});

const positionY = ref(0);
const timerScroll = ref(0);

window.addEventListener("scroll", showButtonOnScroll);

function showButtonOnScroll() {
    if (timerScroll.value) return;
    timerScroll.value = setTimeout(() => {
        positionY.value = window.scrollY;
        clearTimeout(timerScroll.value);
        timerScroll.value = 0;
    }, 100);
}

function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
</script>

<template lang="">
    <div class="results wrap-prop">
        <h2 class="results__empty text" v-show="!loadingStore.isLoading">
            <span v-show="!loadingStore.isError && props.items.length === 0">
                Ничего не найдено
            </span>
            <span v-show="loadingStore.isError">
                Сервис изображений не работает, повторите попытку позднее.
            </span>
        </h2>
        <div
            class="results__grid"
            v-if="!loadingStore.isLoading && !loadingStore.isError"
        >
            <CardUnit :data="item" v-for="item in props.items" :key="item.id"/>
        </div>
        <div class="results__loading" v-show="loadingStore.isLoading">
            <img
                src="@/assets/img/icons/loader.svg"
                alt=""
                class="results__loading-img"
            />
        </div>
        <button
            class="results__scroll"
            @click="scrollTop()"
            v-show="positionY > 300"
        >
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
    text-align: center;
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
    cursor: pointer;

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
