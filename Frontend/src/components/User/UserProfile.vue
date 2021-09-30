<template>
    <b-container class="container-main">
        <b-col class="col">
            <b-img center class="profile-img" :src="url" rounded="circle"  alt="Profile picture"></b-img>
            <p class="text-center w-100 fw-bold text-name" >{{name}}</p>
            <TabWrapper>
                <!-- <Tab title="Info"><Info /></Tab>
                <Tab title="Pet"><Pets /></Tab> -->
                <Tab title="Info"><Info /></Tab>
                <Tab title="Pets"><Pets /></Tab>
            </TabWrapper>
        </b-col>
    </b-container>
</template>

<style scoped>
.container-main {
  background-color: white;
  margin: 26px 142px; 
  border-radius: 33px;
  overflow: hidden;
  padding: 0px 70px;
}

.col {
    overflow: visible;
}

.profile-img {
    height: 276px;
    width: 276px;
    margin-top: 60px;
}

.text-name {
    margin: 26px 0px;
    font-size: 40px;
    /*font-style: normal;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0em; */

}

.container-sub {
    margin: 0px auto;
    margin-bottom: 56px;
    background: #FFFCFC;
    box-shadow: 0px 0px 20px 5px rgba(105, 105, 105, 0.15);
    border-radius: 26px;
    width: fit-content;
    padding: 50px 150px;
}

.tab-button-wrapper {
    overflow: hidden;
}

.profile-section-selector {
    background: #FFFFFF;
    border: 1px solid #6880FF;
    box-sizing: border-box;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    transition: 300ms;
    padding: 3px 20px;
    margin-bottom: 50px;
}

.active {
    background: #6880FF;
    background: #6880FF;
    color: #FFFFFF;
}
</style>

<script setup>
import Info from "./UserProfileTabs/Slots/Info.vue"
import Pets from "./UserProfileTabs/Slots/Pets.vue"
import TabWrapper from "./UserProfileTabs/TabWrapper.vue"
import Tab from "./UserProfileTabs/Tab.vue"

import axios from "axios";
import Vue from "vue"
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
    name: "UserProfile",
    data: function() {
        return {
            tabs: ["Home", "Contact"],
            selected: "Home",
            token: "",
            url: "",
            name: ""
        };
    },
    components: {
        Info,
        Pets,
        TabWrapper,
        Tab
    },
    mounted() {
        this.token = localStorage.getItem("sweet-token");
        const config = {
            headers: {
                "swt-token": this.token
            }
        }
        axios.post("http://localhost:5000/api/user/auth",null,config)
        .then(result=> {
            this.name = result.data.name
            this.url = `http://localhost:5000/api/public/profile_pictures/${result.data.image}`

        })
        .catch(err => {
            alert(err)
        })
    }
}
</script>