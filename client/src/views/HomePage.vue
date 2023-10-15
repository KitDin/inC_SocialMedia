<template>
    <div>
        <Header></Header>
        <div class="HomeContent">
            <Nav></Nav>
            <div class="HC-Post">
                <div class="HC-Post-infor">
                    <img src="../assets/img_users/avatars/user18.png" class="avatar">
                    <p class="HC-Post-username name1">Ruych.im <span class="username-time">• 19h</span></p>
                </div>
                <div class="HC-Post-imgs">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                </div>
                <div class="HC-Post-icon">
                    <i @click="toggleHeart()"
                        :class="['bi', { 'bi-heart': !isHeartFilled }, 'icon', { 'bi-heart-fill': isHeartFilled }]"></i>
                    <i class="bi bi-chat icon"></i>
                </div>
                <div class="HC-Post-status">
                    <span class="HC-Post-username name2">Ruych.im</span>
                    <span class="status">Hello choi cung nhoa</span>
                    <div class="status-hashtag">
                        <span class="hashtag">#maiyeu</span>
                        <span class="hashtag">#vlog</span>
                        <span class="hashtag">#choicung</span>
                        <span class="hashtag">#vuide</span>
                    </div>
                </div>
                <div class="allcomment">View 16 comment</div>
                <input class="inputcomment" type="text" @pointerenter="" placeholder="Add a comment...">
            </div>

            <div class="HC-Post">
                <div class="HC-Post-infor">
                    <img src="../assets/img_users/avatars/user18.png" class="avatar">
                    <p class="HC-Post-username name1">Ruych.im <span class="username-time">• 19h</span></p>
                </div>
                <div class="HC-Post-imgs">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                </div>
                <div class="HC-Post-icon">
                    <i @click="toggleHeart()"
                        :class="['bi', { 'bi-heart': !isHeartFilled }, 'icon', { 'bi-heart-fill': isHeartFilled }]"></i>
                    <i class="bi bi-chat icon"></i>
                </div>
                <div class="HC-Post-status">
                    <span class="HC-Post-username name2">Ruych.im</span>
                    <span class="status">Hello choi cung nhoa</span>
                    <div class="status-hashtag">
                        <span class="hashtag">#maiyeu</span>
                        <span class="hashtag">#vlog</span>
                        <span class="hashtag">#choicung</span>
                        <span class="hashtag">#vuide</span>
                    </div>
                </div>
                <div class="allcomment">View 16 comment</div>
                <input class="inputcomment" type="text" @pointerenter="" placeholder="Add a comment...">
            </div>

            <div class="HC-Post">
                <div class="HC-Post-infor">
                    <img src="../assets/img_users/avatars/user18.png" class="avatar">
                    <p class="HC-Post-username name1">Ruych.im <span class="username-time">• 19h</span></p>
                </div>
                <div class="HC-Post-imgs">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                </div>
                <div class="HC-Post-icon">
                    <i @click="toggleHeart()"
                        :class="['bi', { 'bi-heart': !isHeartFilled }, 'icon', { 'bi-heart-fill': isHeartFilled }]"></i>
                    <i class="bi bi-chat icon"></i>
                </div>
                <div class="HC-Post-status">
                    <span class="HC-Post-username name2">Ruych.im</span>
                    <span class="status">Hello choi cung nhoa</span>
                    <div class="status-hashtag">
                        <span class="hashtag">#maiyeu</span>
                        <span class="hashtag">#vlog</span>
                        <span class="hashtag">#choicung</span>
                        <span class="hashtag">#vuide</span>
                    </div>
                </div>
                <div class="allcomment">View 16 comment</div>
                <input class="inputcomment" type="text" @pointerenter="" placeholder="Add a comment...">
            </div>

            <div class="HC-Post">
                <div class="HC-Post-infor">
                    <img src="../assets/img_users/avatars/user18.png" class="avatar">
                    <p class="HC-Post-username name1">Ruych.im <span class="username-time">• 19h</span></p>
                </div>
                <div class="HC-Post-imgs">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                </div>
                <div class="HC-Post-icon">
                    <i @click="toggleHeart()"
                        :class="['bi', { 'bi-heart': !isHeartFilled }, 'icon', { 'bi-heart-fill': isHeartFilled }]"></i>
                    <i class="bi bi-chat icon"></i>
                </div>
                <div class="HC-Post-status">
                    <span class="HC-Post-username name2">Ruych.im</span>
                    <span class="status">Hello choi cung nhoa</span>
                    <div class="status-hashtag">
                        <span class="hashtag">#maiyeu</span>
                        <span class="hashtag">#vlog</span>
                        <span class="hashtag">#choicung</span>
                        <span class="hashtag">#vuide</span>
                    </div>
                </div>
                <div class="allcomment">View 16 comment</div>
                <input class="inputcomment" type="text" @pointerenter="" placeholder="Add a comment...">
            </div>

            <div class="HC-Post">
                <div class="HC-Post-infor">
                    <img src="../assets/img_users/avatars/user18.png" class="avatar">
                    <p class="HC-Post-username name1">Ruych.im <span class="username-time">• 19h</span></p>
                </div>
                <div class="HC-Post-imgs">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                </div>
                <div class="HC-Post-icon">
                    <i @click="toggleHeart()"
                        :class="['bi', { 'bi-heart': !isHeartFilled }, 'icon', { 'bi-heart-fill': isHeartFilled }]"></i>
                    <i class="bi bi-chat icon"></i>
                </div>
                <div class="HC-Post-status">
                    <span class="HC-Post-username name2">Ruych.im</span>
                    <span class="status">Hello choi cung nhoa</span>
                    <div class="status-hashtag">
                        <span class="hashtag">#maiyeu</span>
                        <span class="hashtag">#vlog</span>
                        <span class="hashtag">#choicung</span>
                        <span class="hashtag">#vuide</span>
                    </div>
                </div>
                <div class="allcomment">View 16 comment</div>
                <input class="inputcomment" type="text" @pointerenter="" placeholder="Add a comment...">
            </div>

            <div class="HC-Post">
                <div class="HC-Post-infor">
                    <img src="../assets/img_users/avatars/user18.png" class="avatar">
                    <p class="HC-Post-username name1">Ruych.im <span class="username-time">• 19h</span></p>
                </div>
                <div class="HC-Post-imgs">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                </div>
                <div class="HC-Post-icon">
                    <i @click="toggleHeart()"
                        :class="['bi', { 'bi-heart': !isHeartFilled }, 'icon', { 'bi-heart-fill': isHeartFilled }]"></i>
                    <i class="bi bi-chat icon"></i>
                </div>
                <div class="HC-Post-status">
                    <span class="HC-Post-username name2">Ruych.im</span>
                    <span class="status">Hello choi cung nhoa</span>
                    <div class="status-hashtag">
                        <span class="hashtag">#maiyeu</span>
                        <span class="hashtag">#vlog</span>
                        <span class="hashtag">#choicung</span>
                        <span class="hashtag">#vuide</span>
                    </div>
                </div>
                <div class="allcomment">View 16 comment</div>
                <input class="inputcomment" type="text" @pointerenter="" placeholder="Add a comment...">
            </div>

            <div class="HC-Post">
                <div class="HC-Post-infor">
                    <img src="../assets/img_users/avatars/user18.png" class="avatar">
                    <p class="HC-Post-username name1">Ruych.im <span class="username-time">• 19h</span></p>
                </div>
                <div class="HC-Post-imgs">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                    <img src="../assets/img_users/covers/cover18.png" class="img">
                </div>
                <div class="HC-Post-icon">
                    <i @click="toggleHeart()"
                        :class="['bi', { 'bi-heart': !isHeartFilled }, 'icon', { 'bi-heart-fill': isHeartFilled }]"></i>
                    <i class="bi bi-chat icon"></i>
                </div>
                <div class="HC-Post-status">
                    <span class="HC-Post-username name2">Ruych.im</span>
                    <span class="status">Hello choi cung nhoa</span>
                    <div class="status-hashtag">
                        <span class="hashtag">#maiyeu</span>
                        <span class="hashtag">#vlog</span>
                        <span class="hashtag">#choicung</span>
                        <span class="hashtag">#vuide</span>
                    </div>
                </div>
                <div class="allcomment">View 16 comment</div>
                <input class="inputcomment" type="text" @pointerenter="" placeholder="Add a comment...">
            </div>

            <NavRequestFriend></NavRequestFriend>
        </div>
    </div>
</template>

<script>
import Footer from "../components/Footer.vue"
import Nav from "../components/Nav.vue"
import NavRequestFriend from "../components/NavRequestFriend.vue"
import AuthenticationService from "../services/AuthenticationService"

export default {
    data() {
        return {
            isHeartFilled: false,
            userid: this.$router.history.current.params.id,
            user: []
        }
    },
    components: {
        Footer,
        Nav,
        NavRequestFriend
    },
    methods: {
        loadimg(user) {
            return require(`../assets/img_users/avatars/${user}`)
        }, toggleHeart() {
            this.isHeartFilled = !this.isHeartFilled; // Chuyển đổi trạng thái trái tim
            console.log(this.isHeartFilled)
        },
    },
    async mounted() {
        this.user = (await AuthenticationService.getUser(this.userid)).data
        // console.log(this.user.USER_AvatarURL);
    }
}
</script>

<style scoped>
.HomeContent {
    margin: 0;
    width: 100%;
    height: fit-content;
    position: relative;

    .HC-Post {
        width: 478px;
        height: fit-content;
        margin: 0px 462px 0px 400px;
        padding-top: 28px;
        border-bottom: #737373 solid 0.5px;

        .HC-Post-infor {
            width: 100%;
            display: flex;
            margin: 0 12px 12px 8px;

            .avatar {
                width: 42px;
                height: 42px;
                object-fit: cover;
                border-radius: 50%;
            }

            .HC-Post-username {
                margin: 0;
                font-size: 14px;
                text-align: center;
                position: relative;
                top: 50%;
                transform: translate(10px, 10px);
                font-weight: 600;
                cursor: pointer;

                .username-time {
                    font-weight: 500;
                    color: #737373;
                }
            }
        }


        .HC-Post-imgs {
            width: 100%;
            height: 584px;
            display: flex;
            flex-wrap: nowrap;
            overflow: hidden;
            border-radius: 15px;

            .img {
                width: 100%;
                height: 584px;
                object-fit: cover;
            }
        }

        .HC-Post-icon {
            padding-top: 8px;

            .icon {
                font-size: 24px;
                padding: 8px;

                &:hover {
                    opacity: .5;
                }
            }

            .bi-heart-fill {
                color: red;
            }

        }

        .HC-Post-like {
            font-size: 14px;
            font-weight: 500px;
            margin-bottom: 8px;
        }

        .HC-Post-status {
            font-size: 14px;
            margin-bottom: 8px;

            .HC-Post-username {
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
            }

            .status {}

            .status-hashtag {
                .hashtag {
                    color: #00376b;
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
        }

        .allcomment {
            font-size: 14px;
            color: #737373;
            cursor: pointer;
            margin-bottom: 8px;
        }

        .inputcomment {
            width: 100%;
            border: none;
            background-color: #fafafa;
            font-size: 14px;
            margin-bottom: 8px;
        }
    }
}
</style>


