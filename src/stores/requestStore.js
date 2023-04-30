import { defineStore } from "pinia";
import { useLoadingStore } from "./loadingStore";
import { useFavouriteStore } from "./favouriteStore";

export const useRequestStore = defineStore("request", () => {
    // stores
    const loadingStore = useLoadingStore();
    const favouriteStore = useFavouriteStore();
    // vars
    const clientId = "po0n1en479mJFHQq5_PnYTuwJ4iApTfNgYa7kWuD07c";

    async function doRequest(req) {
        loadingStore.isLoading++;
        loadingStore.isError = false;
        try {
            const res = await fetch(req);
            const finalRes = await res.json();
            return finalRes;
        } catch (error) {
            console.log(error);
            loadingStore.isError = true;
        } finally {
            loadingStore.isLoading--;
        }
    }

    function doSearch(query, target) {
        return doRequest(
            `https://api.unsplash.com/search/photos?query=${query}&per_page=9&client_id=${clientId}`
        );
    }

    function getRandomImages() {
        return doRequest(
            `https://api.unsplash.com/photos/random/?&count=9&client_id=${clientId}`
        );
    }

    function getImageById(id) {
        return doRequest(
            `https://api.unsplash.com/photos/${id}/?&client_id=${clientId}`
        );
    }

    async function getFavouriteItems() {
        loadingStore.isLoading++;
        const favItems = [];
        for (let item of favouriteStore.favouriteList) {
            await getImageById(item).then((res) => {
                favItems.push(res);
            });
        }
        loadingStore.isLoading--;
        return favItems;
    }

    return {
        doSearch,
        getRandomImages,
        getFavouriteItems,
        getImageById,
    };
});
