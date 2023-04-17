<script setup>
import { useGeneralStore } from '../../stores/general';
const store = useGeneralStore();
const props = defineProps(["data"]);

function openInNewTab() {
    window.open(props.data.urls.regular);
}
</script>

<template lang="">
    <div class="photo">
        <div class="photo__bg">
            <img
                src="@\assets\img\bg\art-bg.png"
                alt=""
                class="photo__bg-img"
            />
        </div>
        <div class="photo__inner wrap-prop">
            <div class="photo__panel panel text">
                <div class="panel__author">
                    <div class="panel__avatar">
                        <img
                            :src="props.data.user.profile_image.medium"
                            alt=""
                            class="panel__img"
                        />
                    </div>
                    <div class="panel__text">
                        <div class="panel__name">{{ props.data.user.name }}</div>
                        <div class="panel__tag" v-if="props.data.user.instagram_username !== null">@{{ props.data.user.instagram_username }}</div>
                    </div>
                </div>
                <div class="panel__buttons">
                    <button class="button button_favourite text" @click="store.toggleFavourite(props.data.id)"
                    :class="{ 'button_favourite_true':  store.checkFavourite(props.data.id)}">
                        <div class="button__inner">
                            <img
                                src="@/assets/img/icons/heart-black.svg"
                                alt=""
                                srcset=""
                            />
                        </div>
                    </button>
                    <button class="button button_download text" @click="openInNewTab()">
                        <div class="button__inner">
                            <img
                                src="@/assets/img/icons/download.svg"
                                alt=""
                                srcset=""
                                class="button__img"
                            />
                            Download
                        </div>
                    </button>
                </div>
            </div>
            <img :src="props.data.urls.regular" alt="" class="photo__img" />
        </div>
    </div>
</template>

<style scoped>
.photo {
    position: relative;
    height: 775px;
}

.photo__bg {
    z-index: -100;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #000;
}

.photo__bg-img {
    width: 200%;
    height: auto;
    opacity: 0.5;
}

.panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
}

.panel__author {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.panel__avatar {
    border-radius: 8px;
    overflow: hidden;
    width: 55px;
    height: 55px;
}

.panel__name {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
}

.panel__text {
    padding-left: 10px;
}

.panel__img {
    width: 100%;
    height: auto;
}

.panel__buttons {
    height: min-content;
}
.photo__img {
    width: 100%;
    height: auto;
    padding-bottom: 40px;
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

.button__img {
    margin-right: 16px;
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

.button_download {
    width: 206.25px;
    height: 49.62px;
    background-color: #fff200;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #000000;
}

.button_download:hover {
    background-color: #989001;
}
</style>
