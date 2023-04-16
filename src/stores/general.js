import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", () => {
    const searchWord = ref("");
    const shownResults = ref([]);
    const isLoading = ref(false);

    watch(searchWord, () => {
        if (searchWord.value === "") {
            getRandomImages();
        } else {
            doSearch(searchWord.value)
        }
    })

    const clientId = "po0n1en479mJFHQq5_PnYTuwJ4iApTfNgYa7kWuD07c";

    async function doSearch(query) {
        isLoading.value = true;
        const requestUrl = `https://api.unsplash.com/search/photos?query=${query}&per_page=9&client_id=${clientId}`;
        const res = await fetch(requestUrl);
        const finalRes = await res.json();
        shownResults.value = finalRes.results;
        // isLoading.value = false;
        setTimeout(() => {isLoading.value = false}, 300);
    }

    async function getRandomImages() {
        isLoading.value = true;
        const requestUrl = `https://api.unsplash.com/photos/random/?&count=9&client_id=${clientId}`;
        const res = await fetch(requestUrl);
        const finalRes = await res.json();
        shownResults.value = finalRes;
        // isLoading.value = false;
        setTimeout(() => {isLoading.value = false}, 300);
        
    }

    return { searchWord, shownResults, isLoading, doSearch, getRandomImages };
});
