<script setup>
import { watch, ref } from "vue";
import { debounce } from "@/funs/debounce";
import { useSearchStore } from "../../stores/searchStore";

const searchStore = useSearchStore();
const searchWord = ref("");

const searchDebouncer = debounce(() => {
    searchStore.searchWord = searchWord.value;
}, 300);

watch(searchWord, () => {
    searchDebouncer();
});
</script>

<template lang="">
    <div class="search">
        <div class="search__bg">
            <img src="@/assets/img/bg/bg.png" alt="" class="search__img" />
        </div>
        <div class="search__form form">
            <input
                type="text"
                class="form__input text"
                placeholder="Поиск"
                v-model="searchWord"
            />
            <button class="form__button">
                <img
                    class="form__icon"
                    src="@/assets/img/icons/search-black.svg"
                    alt=""
                    srcset=""
                />
            </button>
        </div>
    </div>
</template>

<style scoped>
.search {
    position: relative;
    width: 100%;
    height: max(3vw + 200px, 230px);

    display: flex;
    justify-content: center;
    align-items: center;
}

.search::after {
    content: "";

    position: absolute;
    bottom: -16px;
    left: 0;

    width: 100%;
    height: 16px;
    background-color: #c4c4c4;
}

.search__bg {
    position: absolute;
    background-color: black;
    z-index: -100;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    overflow: hidden;
    min-width: 320px;
}

.search__img {
    width: 100%;
    height: auto;
    opacity: 0.5;
}

.form {
    position: relative;
    box-sizing: border-box;
    width: max(35vw + 150px, 335px);

    height: 70px;
    padding: 0 20px;
}

.form__input {
    width: 100%;
    height: 100%;

    box-sizing: border-box;
    padding: 1em 3em 1em min(1vw + 1em, 2em);
    font-size: 24px;
    color: #000000;
}

.form__button {
    border: 0;
    background-color: unset;

    position: absolute;
    right: 44px;
    top: 24px;

    cursor: pointer;
}

@media (max-width: 767px) {
    .search::after {
        display: none;
    }
}

@media (max-width: 375px) {
    .search__img {
        width: auto;
        height: 100%;
    }
}
</style>
