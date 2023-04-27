<script setup>
import { useGeneralStore } from "../../stores/general";
const store = useGeneralStore();

const props = defineProps(["data"]);

async function downloadImage() {
    const res = await fetch(props.data.urls.regular);
    const blob = await res.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = props.data.id;
    link.click();
    URL.revokeObjectURL(link.href);
}
</script>

<template>
    <div class="panel text">
        <div class="panel__author">
            <div class="panel__avatar">
                <img
                    :src="props.data.user.profile_image.medium"
                    alt=""
                    class="panel__img"
                />
            </div>
            <div class="panel__text">
                <div class="panel__name">
                    {{ props.data.user.name }}
                </div>
                <div
                    class="panel__tag"
                    v-if="props.data.user.instagram_username !== null"
                >
                    @{{ props.data.user.instagram_username }}
                </div>
            </div>
        </div>
        <div class="panel__buttons">
            <button
                class="button button_favourite text"
                @click="store.toggleFavourite(props.data.id)"
            >
                <div class="button__inner">
                    <img
                        src="@/assets/img/icons/heart-yellow.svg"
                        alt=""
                        srcset=""
                        v-if="store.checkFavourite(props.data.id)"
                    />
                    <img
                        src="@/assets/img/icons/heart-black.svg"
                        alt=""
                        srcset=""
                        v-else
                    />
                </div>
            </button>
            <button
                class="button button_download text"
                @click="downloadImage()"
            >
                <div class="button__inner">
                    <img
                        src="@/assets/img/icons/download.svg"
                        alt=""
                        srcset=""
                        class="button__img"
                    />
                    <span class="button__text">Download</span>
                </div>
            </button>
        </div>
    </div>
</template>

<style scoped>
.panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: max(2.5vw, 40px) 0 max(2vw, 32px) 0;
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
    font-size: clamp(18px, 2vw, 30px);
    line-height: 35px;
}

.panel__text {
    color: white;
    padding-left: 10px;
}

.panel__tag {
    font-size: clamp(14px, 1.5vw, 18px);
}

.panel__img {
    width: 100%;
    height: auto;
}

.panel__buttons {
    height: min-content;
}

.form {
    display: inline-block;
}

.button {
    display: inline-block;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    border: 0;
    cursor: pointer;
}

.button__inner {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
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

.button_download {
    width: 206.25px;
    height: 49.62px;
    background-color: #fff200;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    margin-left: 20px;
    color: #000000;
}

.button_download:hover {
    background-color: #c5bb00;
}

@media (max-width: 992px) {
    .panel__text {
        color: #000000;
    }
    .panel__tag {
        color: #bdbdbd;
    }
}

@media (max-width: 767px) {
    .button_download,
    .button_favourite {
        width: 41px;
        height: 41px;
    }

    .button__text {
        display: none;
    }

    .button__img {
        margin: 0;
    }
}
</style>
