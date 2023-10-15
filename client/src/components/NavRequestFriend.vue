<template>
    <div class="NavFriend">
        <div class="NF-myInf">
            <img class="NF-myInf-avatar pointer" src="../assets/img_users/avatars/user18.png" alt="">
            <div class="NF-myInf-name">
                <p class="myUsername pointer">iamdtkiet</p>
                <p class="myName">Đinh Tuấn Kiệt</p>
            </div>
            <p class="NF-myInf-logout" @click="logout()">Logout</p>
        </div>
        <div class="NF-line">Your request </div>
        <div class="NF-request">
            <div class="NF-request-user">
                <img class="NF-request-user-avata pointer" src="../assets/img_users/avatars/user18.png" alt="">
                <div class="NF-request-user-name">
                    <p class="username pointer">lil_tiho</p>
                    <p class="time">by 5 days</p>
                </div>
                <button class="NF-request-user-accept">Accept</button>
            </div>
        </div>

        <div class="NF-request">
            <div class="NF-request-user">
                <img class="NF-request-user-avata" src="../assets/img_users/avatars/user18.png" alt="">
                <div class="NF-request-user-name">
                    <p class="username">lil_tiho</p>
                    <p class="time">by 5 days</p>
                </div>
                <button class="NF-request-user-accept">Accept</button>
            </div>
        </div>
        <div class="NF-request">
            <div class="NF-request-user">
                <img class="NF-request-user-avata" src="../assets/img_users/avatars/user18.png" alt="">
                <div class="NF-request-user-name">
                    <p class="username">lil_tiho</p>
                    <p class="time">by 5 days</p>
                </div>
                <button class="NF-request-user-accept">Accept</button>
            </div>
        </div>
        <div class="NF-request">
            <div class="NF-request-user">
                <img class="NF-request-user-avata" src="../assets/img_users/avatars/user18.png" alt="">
                <div class="NF-request-user-name">
                    <p class="username">lil_tiho</p>
                    <p class="time">by 5 days</p>
                </div>
                <button class="NF-request-user-accept">Accept</button>
            </div>
        </div>
        <div class="NF-request">
            <div class="NF-request-user">
                <img class="NF-request-user-avata" src="../assets/img_users/avatars/user18.png" alt="">
                <div class="NF-request-user-name">
                    <p class="username">lil_tiho</p>
                    <p class="time">by 5 days</p>
                </div>
                <button class="NF-request-user-accept">Accept</button>
            </div>
        </div>
        <router-view />
        <Footer class="footer"></Footer>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';
import Footer from './Footer.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        RouterLink,
        Footer
    }, methods: {
        logout() {
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>
.NavFriend {
    position: fixed;
    right: 52px;
    top: 52px;
    width: 360px;
    height: fit-content;

    .footer {
        padding-top: 22px;
        opacity: .5;
    }

    .NF-myInf {
        width: 100%;
        display: flex;
        position: relative;

        .NF-myInf-avatar {
            height: 56px;
            width: 56px;
            object-fit: cover;
            border-radius: 50%;
            margin-right: 20px;
        }

        .NF-myInf-name {
            font-size: 14px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: nowrap;

            .myUsername {
                margin: 0;
                font-weight: 600;
            }

            .myName {
                margin: 0;
                color: #737373;
                opacity: .7;
            }
        }

        .NF-myInf-logout {
            font-size: 14px;
            cursor: pointer;
            text-decoration: none;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(-50%, -50%);
            color: #0095f6;
            font-weight: bolder;
        }
    }

    .NF-line {
        padding: 12px 0 12px 0px;
        font-size: 14px;
        font-weight: 600;
        color: #737373;
    }

    .NF-request {
        display: flex;
        width: 100%;
        height: 50px;
        padding: 6px 0 6px 0px;
        position: relative;

        .NF-request-user {
            display: flex;

            .NF-request-user-avata {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                object-fit: cover;
                margin-right: 20px;
            }

            .NF-request-user-name {
                font-size: 14px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                flex-wrap: nowrap;

                .username {
                    margin: 0;
                    font-weight: 600;
                }

                .time {
                    margin: 0;
                    color: #737373;
                    opacity: .7;
                }
            }

        }

        .NF-request-user-accept {
            position: absolute;
            right: 0;
            border: none;
            top: 50%;
            background-color: #fafafa;
            right: 0;
            top: 50%;
            transform: translate(-50%, -50%);
            color: #0095f6;
            font-size: 14px;
            font-weight: 400;

        }

    }
}

.pointer {
    cursor: pointer;
}
</style>