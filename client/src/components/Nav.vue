<template>
    <div class="navcol" :class="is_expanded ? 'is_expanded' : 'navcol-246'">
        <img class="img" src="../assets/img_logo/logo.png" alt="">
        <div>
            <ul class="navmenu">
                <li class="navli" v-for="link in links" :key="link" :class="{ active: link.link_to === $route.path }"
                    @click="handleItemClick(link)" style="cursor: pointer;">
                    <div class="nava">
                        <i ref="i" class="icon" :class="getActiveIconClass(link)"></i>
                        <p class="text" v-if="!is_expanded">{{ link.text }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="more-setup ">
            <div class="prevent" @click="shownav()" v-if="show_nav"></div>
            <div class="nav-more">
                <div class="set-up" v-if="show_nav">
                    <ul class="set-up-rule">
                        <li class="set-up-rule-item" style="cursor: pointer;" v-for="set_up_item in set_up_items"
                            :key="set_up_item">
                            <i class="icon" :class="set_up_item.icon"></i>
                            <p class="text"> {{ set_up_item.text }} </p>
                        </li>
                    </ul>
                    <div class="set-up-line"></div>
                    <ul class="set-up-logout" @click="logout">
                        <li style="cursor: pointer;">Log out</li>
                    </ul>
                </div>
            </div>

            <ul class="navmenu">
                <li class="navli">
                    <div class="nava" @click="shownav()" style="cursor: pointer;">
                        <i class=" icon bi bi-three-dots-vertical"></i>
                        <p class=" text">More</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script >
import ref from 'vue'
import { RouterLink } from 'vue-router'
let activeItem = null;
export default {
    data() {
        return {
            is_expanded: false,
            show_nav: false,
            links: [
                { id: 1, icon: "bi bi-house-door", icon_fill: "bi bi-house-fill", text: "Home", link_to: "/home" },
                { id: 2, icon: "bi bi-search-heart", icon_fill: "bi bi-search-heart-fill", text: "Search", link_to: "/search" },
                { id: 3, icon: "bi bi-chat-dots", icon_fill: "bi bi-chat-fill", text: "Messages", link_to: "/messages" },
                { id: 4, icon: "bi bi-heart", icon_fill: "bi bi-heart-fill", text: "Notifications", link_to: null },
                { id: 5, icon: "bi bi-plus-circle", icon_fill: "bi bi-plus-circle-fill", text: "Create", link_to: null },
                { id: 6, icon: "avatar", text: "Profile", link_to: "/notifications" },
            ],
            set_up_items: [
                { id: 1, icon: "bi bi-gear", text: "Settings" },
                { id: 2, icon: "bi bi-clock-history", text: "Your activity" },
                { id: 3, icon: "bi bi-save", text: "Saved" },
                { id: 4, icon: "bi bi-brightness-low", text: "Switch appearance" },
                { id: 5, icon: "bi bi-exclamation-circle", text: "Report a problem" },
            ]
        };
    }, methods: {
        handleItemClick(link) {
            if (link.id === 4) {
                if (!this.is_expanded) {
                    this.is_expanded = !this.is_expanded
                }
            } else if (link.id === 5) {
                if (!this.is_expanded) {
                    this.is_expanded = !this.is_expanded
                }
            } else {
                this.$router.push(link.link_to);
            }
        },
        getActiveIconClass(link) {
            return link.link_to === this.$route.path ? link.icon_fill : link.icon;
        },
        logout() {
            this.$router.push('/')
        },
        shownav() {
            this.show_nav = !this.show_nav
        }
    },
    components: { RouterLink },
}
</script>

<style scoped>
.text {
    display: inline;
}

.navcol-246 {
    width: 246px;
    height: 710px;
}

.navcol {
    height: 710px;
    position: fixed;
    left: 0;
    padding-top: 48px;
    padding-left: 8px;
    padding-right: 8px;
    border-right: 1px solid silver;
    transition: 0.2s ease-out;


    .navmenu {
        padding-left: 0;
        margin-top: 40px;
        height: 330px;
        list-style: none;
        display: flex;
        flex-direction: column;
        font-weight: 500;
    }

    .img {
        width: 46px;
        margin: 0 0 0 5px;
        transition: 0.5s linear;
    }

    .text {
        opacity: 1;
    }

}


.navcol .navmenu li {
    display: block;
    width: 100%;
    margin-bottom: 5px;
}

.navcol li .nava i {
    position: relative;
    font-size: 24px;
    padding: 8px;
}

.navcol .nava {
    display: block;
    text-decoration: none;
    color: black;
    width: 100%;
    padding: 8px 8px 8px 0;
}

.active {
    font-weight: 900;
    border: 1px solid silver;
    border-radius: 16px;
}

.navcol .nava:hover {
    display: block;
    background-color: silver;
    border-radius: 15px;
}

.more-setup {
    position: relative;
    width: 100%;

    .navmenu {
        position: relative;
        bottom: -155px;
    }

    .nav-more {
        .set-up {
            position: absolute;
            z-index: 999;
            width: 120%;
            background-color: white;
            border-radius: 15px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            left: 0px;
            bottom: 180px;

            .set-up-rule,
            .set-up-logout {
                list-style: none;
                padding: 0;
            }

            .set-up-line {
                width: 100%;
                height: 3px;
                background-color: silver;
                opacity: .5;
            }

            .set-up-logout {
                padding: 14px 14px 14px 14px;
                margin: 5px 5px 5px 5px;

                &:hover {
                    background-color: rgb(150, 149, 149);
                    border-radius: 9px;
                }
            }

            .set-up-rule {
                display: block;
                width: 100%;
                margin-bottom: 5px;
                font-size: 15px;

                .set-up-rule-item {
                    padding: 14px 14px 14px 14px;
                    margin: 5px 5px 2px 5px;

                    &:hover {
                        background-color: silver;
                        border-radius: 9px;
                    }

                    .icon {
                        padding-right: 15px;
                    }
                }
            }
        }
    }

    .prevent {
        position: absolute;
        width: 500%;
        height: 500%;
        top: -500px;
    }

    .set-up-off {
        display: none;
    }
}



.is_expanded {
    width: 60px;
    height: 710px;
    transition: 0.5s ease-in-out;

    .text {
        font-size: 0;
        transition: 0.5s ease-in-out;
    }

    .navmenu {
        padding-left: 0;
        margin-top: 40px;
        height: 330px;
        list-style: none;
        display: flex;
        flex-direction: column;
        font-weight: 500;

        .navli {
            display: block;
            width: 100%;
            height: 100%;
        }
    }

    .img {
        width: 35px !important;
        margin: 0 0 5px 5px !important;
    }

    .more-setup {
        position: relative;
        width: 100%;

        .navmenu {
            position: relative;
            bottom: -155px;
        }

        .nav-more {
            .set-up {
                position: absolute;
                z-index: 999;
                width: 600%;
                background-color: white;
                border-radius: 15px;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                left: 0px;
                bottom: 180px;

                .set-up-rule,
                .set-up-logout {
                    list-style: none;
                    padding: 0;
                }

                .set-up-line {
                    width: 100%;
                    height: 3px;
                    background-color: silver;
                    opacity: .5;
                }

                .set-up-logout {
                    padding: 14px 14px 14px 14px;
                    margin: 5px 5px 5px 5px;

                    &:hover {
                        background-color: rgb(150, 149, 149);
                        border-radius: 9px;
                    }
                }

                .set-up-rule {
                    display: block;
                    width: 100%;
                    margin-bottom: 5px;
                    font-size: 15px;

                    .set-up-rule-item {
                        padding: 14px 14px 14px 14px;
                        margin: 5px 5px 2px 5px;

                        &:hover {
                            background-color: silver;
                            border-radius: 9px;
                        }

                        .icon {
                            padding-right: 15px;
                        }

                        .text {
                            font-size: 14px;
                        }
                    }
                }
            }
        }

        .prevent {
            position: absolute;
            width: 500%;
            height: 500%;
            top: -500px;
        }

        .set-up-off {
            display: none;
        }
    }
}
</style>