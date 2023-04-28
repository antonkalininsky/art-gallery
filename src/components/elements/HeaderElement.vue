<script setup>
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
                <img src="@/assets/img/logo/logo.svg" alt="" class="logo" />
            </div>
            <nav class="header__nav nav">
                <routerLink to="/" class="nav__item" v-if="!hideSearch">
                    <img
                        src="@/assets/img/icons/search-white.svg"
                        alt=""
                        class="nav__icon"
                    />
                    <span class="nav__text text">Поиск</span>
                </routerLink>
                <routerLink to="/fav" class="nav__item">
                    <img
                        src="@/assets/img/icons/heart-white.svg"
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
    width: max(100%, 320px);
    height: max(5vw + 50px, 70px);

    display: flex;
    align-items: center;
}

.header__inner {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__logo {
    width: max(8vw + 40px, 84px);
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
    font-size: 18px;
    margin-left: 38px;
    cursor: pointer;
}

.nav__item:hover .nav__text {
    text-decoration: underline;
}

.nav__text {
    margin-left: 12px;
}

@media (max-width: 767px) {
    .nav__text {
        display: none;
    }
}
</style>
