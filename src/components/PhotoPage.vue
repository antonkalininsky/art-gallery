<script setup>
import HeaderElement from './elements/HeaderElement.vue';
import PhotoElement from './elements/PhotoElement.vue';
import { useRoute } from "vue-router";
import { ref } from "vue";
import { useGeneralStore } from "@/stores/general";
const store = useGeneralStore();
const route = useRoute();

const imgData = ref();

store.getImageById(route.query.id).then(
    (result) => {
        imgData.value = result;
        console.log(imgData.value);
    },
    (error) => {
        console.log(error);
    }
);
</script>

<template lang="">
    <div>
        <HeaderElement />
        <PhotoElement :data="imgData"/>
    </div>
</template>

<style lang="">
    
</style>