<script setup>
import { useFavouriteStore } from "../../stores/favouriteStore";

const favouriteStore = useFavouriteStore();
const props = defineProps(["data"]);

function isHorisontal(w, h) {
    return w > h ? true : false;
}
</script>

<template lang="">
    <div class="card">
        <img
            :src="props.data.urls.small"
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
            <div class="card__buttons">
                <button
                    class="button button_favourite text"
                    @click="favouriteStore.toggleFavourite(props.data.id)"
                >
                    <div class="button__inner">
                        <img
                            src="@/assets/img/icons/heart-yellow.svg"
                            alt=""
                            srcset=""
                            v-if="favouriteStore.checkFavourite(props.data.id)"
                        />
                        <img
                            src="@/assets/img/icons/heart-white.svg"
                            alt=""
                            srcset=""
                            v-else
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
                            src="@/assets/img/icons/fullsize.svg"
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
    aspect-ratio: 1 / 1;
    position: relative;
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    background-color: #000;
}

.card__img {
    transition: opacity 0.2s linear;
}

.card:hover .card__img {
    opacity: 0.6;
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
    background: #1d1d1d;
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
    background: #3c3c3c;
}

.button_fullsize {
    background-color: #1d1d1d;
    margin-right: 16px;
}
</style>
