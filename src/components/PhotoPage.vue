<script setup>
import HeaderElement from "./elements/HeaderElement.vue";
import PhotoElement from "./elements/PhotoElement.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template lang="">
    <div>
        <HeaderElement />
        <Suspense>
            <PhotoElement :id="route.query.id" />
        </Suspense>
    </div>
</template>

<style lang=""></style>
