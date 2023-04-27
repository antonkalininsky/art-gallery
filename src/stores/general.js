import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useGeneralStore = defineStore(
    "general",
    () => {
        const searchWord = ref("");
        const shownResults = ref([]);
        const isLoading = ref(false);
        const favouriteList = ref([]);

        watch(searchWord, () => {
            if (searchWord.value === "") {
                getRandomImages();
            } else {
                doSearch(searchWord.value);
            }
        });

        const clientId = "po0n1en479mJFHQq5_PnYTuwJ4iApTfNgYa7kWuD07c";

        async function doSearch(query) {
            isLoading.value = true;
            const requestUrl = `https://api.unsplash.com/search/photos?query=${query}&per_page=9&client_id=${clientId}`;
            const res = await fetch(requestUrl);
            const finalRes = await res.json();
            shownResults.value = finalRes.results;
            setTimeout(() => {
                isLoading.value = false;
            }, 300);
        }

        async function getRandomImages() {
            isLoading.value = true;
            const requestUrl = `https://api.unsplash.com/photos/random/?&count=9&client_id=${clientId}`;
            const res = await fetch(requestUrl);
            const finalRes = await res.json();
            shownResults.value = finalRes;
            setTimeout(() => {
                isLoading.value = false;
            }, 300);
        }

        async function getImageById(id) {
            isLoading.value = true;
            const requestUrl = `https://api.unsplash.com/photos/${id}/?&client_id=${clientId}`;
            const res = await fetch(requestUrl);
            const finalRes = await res.json();
            setTimeout(() => {
                isLoading.value = false;
            }, 300);
            return finalRes;
        }

        function toggleFavourite(id) {
            if (checkFavourite(id)) {
                favouriteList.value.splice(favouriteList.value.indexOf(id), 1);
            } else {
                favouriteList.value.push(id);
            }
        }

        function checkFavourite(id) {
            return favouriteList.value.includes(id);
        }

        async function getFavouriteItems() {
            const buf = [];
            for (let item of favouriteList.value) {
                buf.push(await getImageById(item));
            }
            return buf;
        }

        return {
            favouriteList,
            searchWord,
            shownResults,
            isLoading,
            doSearch,
            getRandomImages,
            toggleFavourite,
            checkFavourite,
            getFavouriteItems,
            getImageById,
        };
    },
    {
        persist: true,
    }
);
