<script setup>
function wayToArt(num) {
    return `./src/assets/img/art/art${num}.png`;
}

let arts = [1, 2, 3, 4, 5, 6, 7, 8, 9];

</script>

<template lang="">
    <div class="results wrap-prop">
        <div class="results__grid">
            <div class="results__item" v-for="art in arts">
                <img :src="wayToArt(art)" alt="" class="results__img" />
            </div>
        </div>
        <div class="results__loading">
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
}

.results__item {
    width: 473.72px;
    height: 453.74px;
    border-radius: 6px;
    overflow: hidden;
}

.results__img {
    width: 100%;
    height: auto;
}

.results__loading {
    width: fit-content;
    padding: 70px 0 40px 0;
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
