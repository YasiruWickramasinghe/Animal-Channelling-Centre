<template>
    <b-container fluid class="main-container">
        <b-col class="main-wrapper-col">
            <div class="page-title">User Management</div>
            <div class="tab-container">
                <b-tabs lazy>
                    <b-tab title="User list" active>
                        <div class="tab-content">
                            <UserListContainer />
                        </div>
                    </b-tab>
                    <b-tab title="Add a user">
                        <div class="tab-content">
                            <AddUser />
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
        </b-col>
    </b-container>
</template>

<style scoped>
.main-container {
    background-color: white;
    width: 87vw;
    margin: 41px auto;
    border-radius: 33px;
    overflow: hidden;
    padding: 0px 86px;
    overflow: hidden;
}

.page-title {
    text-align: start;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
    color: #171859;
    margin-top: 51px;
    margin-bottom: 41px;
}

.col {
    overflow: visible;
}

.page-title {
    text-align: start;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
    color: #171859;
}

.tab-container {
    margin-bottom: 70px;
}

.tab-content{
    padding: 40px 0px;
}

@media only screen and (max-width: 850px) {
    .page-title {
        margin: 51px auto;
        width: fit-content;
    }

    .main-container {
        padding: 0px 46px;
    }
}

@media only screen and (max-width: 550px) {
    .page-title {
        margin: 51px auto;
        width: fit-content;
        font-size: 30px;
    }

    .main-container {
        padding: 0px 10px;
    }
}
</style>

<script setup>

import axios from "axios";
import Vue from "vue"
import VueAxios from "vue-axios";

import UserListContainer from "./UserList/UserListContainer.vue"
import AddUser from "./AddUser.vue"
Vue.use(VueAxios, axios);

export default {
    name: "UserManagement",
    data: function() {
        return {
            token: "",
            users: ["User 1", "User2"]
        };
    },
    components: {
        UserListContainer,
        AddUser
    }
}
</script>