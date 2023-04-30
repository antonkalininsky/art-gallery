import { ref } from "vue";
import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", () => {
    //vars
    const isLoading = ref(0);
    const isError = ref(false);

    return { isLoading, isError };
});
