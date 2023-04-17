<script setup>
import { defineProps } from "vue";
import { useGeneralStore } from "../../stores/general";
const store = useGeneralStore();

const props = defineProps(["data"]);

function isHorisontal(w, h) {
    return w > h ? true : false;
}

// {
//     "id": "g4UaOhStx-Q",
//     "created_at": "2023-02-24T08:39:54Z",
//     "updated_at": "2023-04-15T18:40:04Z",
//     "promoted_at": "2023-04-15T13:36:29Z",
//     "width": 4480,
//     "height": 6720,
//     "color": "#0c2626",
//     "blur_hash": "LI97hKxu4:M|Rjayt6j[0LRj-pt7",
//     "description": null,
//     "alt_description": "a close up of a white rose on a green background",
//     "urls": {
//         "raw": "https://plus.unsplash.com/premium_photo-1677178631537-21ebf6ff62ff?ixid=Mnw0MzY0MDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE2MzQyMDk&ixlib=rb-4.0.3",
//         "full": "https://plus.unsplash.com/premium_photo-1677178631537-21ebf6ff62ff?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MzY0MDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE2MzQyMDk&ixlib=rb-4.0.3&q=85",
//         "regular": "https://plus.unsplash.com/premium_photo-1677178631537-21ebf6ff62ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzY0MDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE2MzQyMDk&ixlib=rb-4.0.3&q=80&w=1080",
//         "small": "https://plus.unsplash.com/premium_photo-1677178631537-21ebf6ff62ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzY0MDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE2MzQyMDk&ixlib=rb-4.0.3&q=80&w=400",
//         "thumb": "https://plus.unsplash.com/premium_photo-1677178631537-21ebf6ff62ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzY0MDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE2MzQyMDk&ixlib=rb-4.0.3&q=80&w=200",
//         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/unsplash-premium-photos-production/premium_photo-1677178631537-21ebf6ff62ff"
//     },
//     "links": {
//         "self": "https://api.unsplash.com/photos/g4UaOhStx-Q",
//         "html": "https://unsplash.com/photos/g4UaOhStx-Q",
//         "download": "https://unsplash.com/photos/g4UaOhStx-Q/download?ixid=Mnw0MzY0MDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE2MzQyMDk",
//         "download_location": "https://api.unsplash.com/photos/g4UaOhStx-Q/download?ixid=Mnw0MzY0MDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE2MzQyMDk"
//     },
//     "likes": 17,
//     "liked_by_user": false,
//     "current_user_collections": [],
//     "sponsorship": null,
//     "topic_submissions": {},
//     "user": {
//         "id": "yY8nbvLcnf4",
//         "updated_at": "2023-04-16T08:21:15Z",
//         "username": "tabithabrooke",
//         "name": "tabitha turner",
//         "first_name": "tabitha",
//         "last_name": "turner",
//         "twitter_username": "tabsturner",
//         "portfolio_url": null,
//         "bio": "hi! tabitha here! i'm a self-taught photographer and illustrator. i love traveling, finding quaint used bookstores, and drinking considerable amounts of coffee. available for hire. find me on instagram: @tabithabrookephotography",
//         "location": "Tennessee",
//         "links": {
//             "self": "https://api.unsplash.com/users/tabithabrooke",
//             "html": "https://unsplash.com/@tabithabrooke",
//             "photos": "https://api.unsplash.com/users/tabithabrooke/photos",
//             "likes": "https://api.unsplash.com/users/tabithabrooke/likes",
//             "portfolio": "https://api.unsplash.com/users/tabithabrooke/portfolio",
//             "following": "https://api.unsplash.com/users/tabithabrooke/following",
//             "followers": "https://api.unsplash.com/users/tabithabrooke/followers"
//         },
//         "profile_image": {
//             "small": "https://images.unsplash.com/profile-1665074075445-c56eb2367a8fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
//             "medium": "https://images.unsplash.com/profile-1665074075445-c56eb2367a8fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
//             "large": "https://images.unsplash.com/profile-1665074075445-c56eb2367a8fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
//         },
//         "instagram_username": "tabithabrookephotography",
//         "total_collections": 2,
//         "total_likes": 65,
//         "total_photos": 742,
//         "accepted_tos": true,
//         "for_hire": true,
//         "social": {
//             "instagram_username": "tabithabrookephotography",
//             "portfolio_url": null,
//             "twitter_username": "tabsturner",
//             "paypal_email": null
//         }
//     },
//     "exif": {
//         "make": null,
//         "model": null,
//         "name": null,
//         "exposure_time": null,
//         "aperture": null,
//         "focal_length": null,
//         "iso": null
//     },
//     "location": {
//         "name": null,
//         "city": null,
//         "country": null,
//         "position": {
//             "latitude": 0,
//             "longitude": 0
//         }
//     },
//     "views": 0,
//     "downloads": 0
// }
</script>

<template lang="">
    <div class="card">
        <img
            :src="props.data.urls.regular"
            alt=""
            class="card__img"
            :class="{
                card__img_vertical: !isHorisontal(
                    props.data.width,
                    props.data.height
                ),
                card__img_horisontal: isHorisontal(
                    props.data.width,
                    props.data.height
                ),
            }"
        />
        <div class="card__data text">
            <div class="card__author">{{ props.data.user.name }}</div>
            <div class="card__likes">{{ props.data.likes }} likes</div>
            <div class="card__buttons">
                <button
                    class="card__favourite-btn card-button text"
                    @click="store.toggleFavourite(props.data.id)"
                    :class="{}"
                >
                    <span v-if="store.checkFavourite(props.data.id)">
                        <span class="card-button__status">В избранном</span>
                        <span class="card-button__suggest">Удалить?</span>
                    </span>
                    <span v-else>Сохранить в избранное</span>
                </button>
                <button
                    class="card__full-btn card-button text"
                    @click="
                        $router.push({
                            path: '/photo',
                            query: {
                                id: props.data.id,
                            },
                        })
                    "
                >
                    Фулл
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    position: relative;

    width: 473.72px;
    height: 453.74px;
    border-radius: 6px;
    overflow: hidden;

    background-color: #000;
    /* cursor: pointer; */
}

.card__img {
    transition: opacity 0.2s linear;
}

.card:hover .card__img {
    opacity: 0.3;
}

.card:hover .card__data {
    opacity: 1;
}

.card__img_vertical {
    width: 100%;
    height: auto;
}

.card__img_horisontal {
    width: auto;
    height: 100%;
}

.card__data {
    transition: opacity 0.2s linear;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    opacity: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 40px;
    font-size: 26px;
}

.card-button {
    background-color: transparent;
    border: 2px solid #ffffff88;
    padding: 20px;
    margin: 0 10px;
    cursor: pointer;
    border-radius: 20px;
}

.card-button:hover {
    outline: 2px solid #fff;
}

.card__favourite-btn:hover .card-button__status {
    display: none;
}

.card-button__suggest {
    display: none;
}

.card__favourite-btn:hover .card-button__suggest {
    display: inline;
}

@media screen and (max-width: 1600px) {
    .card {
        width: 360px;
        height: 330px;
    }
}

@media screen and (max-width: 1200px) {
    .card {
        width: 473px;
        height: 440px;
    }
}

@media screen and (max-width: 1050px) {
    .card {
        width: 360px;
        height: 330px;
    }
}

@media screen and (max-width: 820px) {
    .card {
        width: 550px;
        height: 500px;
    }
}

@media screen and (max-width: 700px) {
    .card {
        width: 335px;
        height: 311px;
    }
}
</style>
