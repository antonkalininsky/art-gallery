<script setup>
import PhotoPanelElement from "./PhotoPanelElement.vue";
import { useGeneralStore } from "../../stores/general";
const store = useGeneralStore();
const props = defineProps(["data"]);
</script>

<template lang="">
    <div class="photo">
        <div class="photo__bg-wrap">
            <div class="photo__bg"></div>
        </div>
        <div class="photo__inner wrap-prop">
            <PhotoPanelElement class="photo__panel" :data="props.data" />
            <img :src="props.data.urls.regular" alt="" class="photo__img" />
        </div>
    </div>
</template>

<style scoped>
.photo {
    height: 775px;
    position: relative;
}

.photo__bg-wrap {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: -100;
}

.photo__bg {
    position: absolute;
    background: linear-gradient(
            rgba(0, 0, 0, 0.5) 100%,
            rgba(0, 0, 0, 0.5) 100%
        ),
        url("@/assets/img/bg/art-bg.png");
    transform: scale(1.1);
    filter: blur(4px);
    -webkit-filter: blur(4px);
    height: 100%;
    width: 100%;
    z-index: -100;
}

.photo__inner {
    z-index: 9999;
}
.photo__img {
    width: 100%;
    height: auto;
    margin-bottom: 40px;
    border-radius: 8px;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.5);
}

@media (max-width: 992px) {
    .photo__bg {
        display: none;
    }

    .photo__img {
        box-shadow: none;
    }
}
</style>
