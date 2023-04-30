import { ref } from "vue";
import { defineStore } from "pinia";

export const useFavouriteStore = defineStore(
    "favourite",
    () => {
        //vars
        const favouriteList = ref([]);

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

        return {
            favouriteList,
            toggleFavourite,
            checkFavourite,
        };
    },
    {
        persist: true,
    }
);
