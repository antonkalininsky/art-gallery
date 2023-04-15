<script setup></script>

<template lang="">
    <div class="search">
        <div class="search__bg">
            <img src="@/assets/img/bg/bg.png" alt="" class="search__img" />
        </div>
        <div class="search__form form">
            <input type="text" class="form__input" />
            <button class="form__button">
                <img
                    class="form__icon"
                    src="@/assets/img/icons/search-black.png"
                    alt=""
                    srcset=""
                />
            </button>
        </div>
    </div>
</template>

<style scoped>
.search {
    position: relative;
    width: 100%;
    height: 250px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.search__bg {
    position: absolute;
    background-color: black;
    z-index: -100;
    top: -20px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.search__img {
    width: 100%;
    height: auto;
    opacity: 0.6;
    margin-top: -500px;
}

.search__form {
    /* margin: 0 auto; */
}
/* &__bg {
        position: absolute;
        background-color: black;
        z-index: -100;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    &__img {
        width: 100%;
        height: auto;
        opacity: 0.6;
    } */
</style>
