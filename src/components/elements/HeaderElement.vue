<script setup>
import { defineProps } from "vue";

const props = defineProps({
    hideSearch: {
        default: false,
    },
});
</script>

<template lang="">
    <header class="header">
        <div class="header__inner wrap-prop">
            <div class="header__logo">
                <img src="@/assets/img/logo/logo.png" alt="" class="logo" />
            </div>
            <nav class="header__nav nav">
                <routerLink to="/" class="nav__item" v-if="!hideSearch">
                    <img
                        src="@/assets/img/icons/search-white.png"
                        alt=""
                        class="nav__icon"
                    />
                    <span class="nav__text text">Поиск</span>
                </routerLink>
                <routerLink to="/fav" class="nav__item">
                    <img
                        src="@/assets/img/icons/heart-white.png"
                        alt=""
                        class="nav__icon"
                    />
                    <span class="nav__text text">Избранное</span>
                </routerLink>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.header {
    background-color: #000;
    width: 100%;
    height: 150px;

    display: flex;
    align-items: center;
}

.header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 100%;
    height: auto;
}

.nav,
.nav__item {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}

.nav__item {
    margin-left: 38px;
    cursor: pointer;
}

.nav__item:hover .nav__text {
    text-decoration: underline;
}

.nav__text {
    margin-left: 12px;
}

@media screen and (max-width: 1200px) {
    .header {
        height: 110px;
    }

    .header__logo {
        width: 150px;
    }
}
@media screen and (max-width: 700px) {
    .header {
        height: 70px;
    }

    .nav__text {
        display: none;
    }

    .header__logo {
        width: 84px;
    }
}
</style>
