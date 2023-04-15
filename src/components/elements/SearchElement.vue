<script setup></script>

<template lang="">
    <div class="search">
        <div class="search__bg">
            <img src="@/assets/img/bg/bg.png" alt="" class="search__img" />
        </div>
        <div class="search__form form">
            <input type="text" class="form__input text" placeholder="Поиск" />
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

.search::after {
    content: "";

    position: absolute;
    bottom: -16px;
    left: 0;

    width: 100%;
    height: 16px;
    background-color: #c4c4c4;
}

.search__bg {
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

.search__img {
    width: 100%;
    height: auto;
    opacity: 0.6;
    margin-top: -30%;
}

.form {
    position: relative;
    width: 866px;
    height: 70px;
    padding: 0 20px;
}

.form__input {
    width: 100%;
    height: 100%;

    box-sizing: border-box;
    padding: 21px 69px 21px 39px;
    font-size: 24px;
    color: #000000;
}

.form__button {
    border: 0;
    background-color: unset;

    position: absolute;
    right: 44px;
    top: 24px;
}

@media screen and (max-width: 1200px) {
    .form {
        width: 600px;
    }

    .search__img {
        margin-top: -10%;
    }
}

@media screen and (max-width: 700px) {
    .search::after {
        display: none;
    }
    .form {
        width: 335px;
    }

    .form__input {
        padding: 21px 69px 21px 25px;
    }

    .search__img {
        width: 100%;
        height: auto;
        margin-top: 0;
    }
}

@media screen and (max-width: 405px) {
    .search__img {
        width: auto;
        height: 100%;
        margin-top: 0;
    }
}
</style>
