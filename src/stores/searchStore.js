import { ref, watch } from "vue";
import { defineStore } from "pinia";
import { useRequestStore } from "./requestStore";

export const useSearchStore = defineStore("search", () => {
    // stores
    const requestStore = useRequestStore();
    // vars
    const searchWord = ref("");
    const shownResults = ref([]);

    watch(searchWord, () => {
        if (searchWord.value === "") {
            requestStore
                .getRandomImages()
                .then((res) => (shownResults.value = res))
                .catch((err) => console.log(err));
        } else {
            requestStore
                .doSearch(searchWord.value)
                .then((res) => (shownResults.value = res.results))
                .catch((err) => console.log(err));
        }
    });

    return {
        searchWord,
        shownResults,
    };
});
