<script setup>
import { defineProps } from "vue";
import { useGeneralStore } from "../../stores/general";
const store = useGeneralStore();

const props = defineProps(["data"]);

function isHorisontal(w, h) {
    return w > h ? true : false;
}
</script>

<template lang="">
    <div class="card">
        <img
            :src="props.data.urls.regular"
            alt=""
            class="card__img"
            :class="{
                card__img_vertical: !isHorisontal(
                    props.data.width,
                    props.data.height
                ),
                card__img_horisontal: isHorisontal(
                    props.data.width,
                    props.data.height
                ),
            }"
        />
        <div class="card__data text">
            <div class="card__author">{{ props.data.user.name }}</div>
            <div class="card__likes">{{ props.data.likes }} likes</div>
            <div class="card__buttons">
                <button
                    class="button button_favourite text"
                    @click="store.toggleFavourite(props.data.id)"
                    :class="{
                        button_favourite_true: store.checkFavourite(
                            props.data.id
                        ),
                    }"
                >
                    <div class="button__inner">
                        <img
                            src="@/assets/img/icons/heart-black.svg"
                            alt=""
                            srcset=""
                        />
                    </div>
                </button>
                <button
                    class="button button_favourite button_fullsize text"
                    @click="
                        $router.push({
                            path: '/photo',
                            query: {
                                id: props.data.id,
                            },
                        })
                    "
                >
                    <div class="button__inner">
                        <img
                            src="@/assets/img/icons/fullsize.png"
                            alt=""
                            srcset=""
                        />
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    position: relative;

    width: 473.72px;
    height: 453.74px;
    border-radius: 6px;
    overflow: hidden;

    background-color: #000;
    /* cursor: pointer; */
}

.card__img {
    transition: opacity 0.2s linear;
}

.card:hover .card__img {
    opacity: 0.3;
}

.card:hover .card__data {
    opacity: 1;
}

.card__img_vertical {
    width: 100%;
    height: auto;
}

.card__img_horisontal {
    width: auto;
    height: 100%;
}

.card__data {
    transition: opacity 0.2s linear;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    opacity: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 40px;
    font-size: 26px;
}

.card__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
}

.button {
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    border: 0;
    margin-left: 20px;
    cursor: pointer;
}

.button__inner {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button_favourite {
    width: 49.07px;
    height: 49.07px;
}

.button_favourite:hover {
    background: #ccc;
}

.button_favourite_true {
    background-color: rgb(81, 176, 81);
}

.button_favourite_true:hover {
    background-color: rgb(217, 56, 56);
}

.button_fullsize {
    background-color: #1d1d1d;
    margin-right: 16px;
}

@media screen and (max-width: 1600px) {
    .card {
        width: 360px;
        height: 330px;
    }
}

@media screen and (max-width: 1200px) {
    .card {
        width: 473px;
        height: 440px;
    }
}

@media screen and (max-width: 1050px) {
    .card {
        width: 360px;
        height: 330px;
    }
}

@media screen and (max-width: 820px) {
    .card {
        width: 550px;
        height: 500px;
    }
}

@media screen and (max-width: 700px) {
    .card {
        width: 335px;
        height: 311px;
    }
}
</style>
