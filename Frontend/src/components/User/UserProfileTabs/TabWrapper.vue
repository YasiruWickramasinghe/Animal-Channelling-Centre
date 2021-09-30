<template>
    <b-container class="container-sub">
        <b-row class="tab-button-wrapper">
            <div>
                <button class="profile-section-selector" v-for="(tab, index) in tabs" :key="tab.title" @click='selectTab(index)' :class='{"tab_selected": (index == selectedIndex)}'>{{ tab.title }}</button>
            </div>
            <b-container fluid style="padding: 0px">
                <slot />
            </b-container>
        </b-row>
    </b-container>
</template>



<script>
// import { ref,provide } from 'vue'
export default {
    data () {
        return {
        selectedIndex: 0, // the index of the selected tab,
        tabs: [],        // all of the tabs
        }
    },
    created () {
        this.tabs = this.$children
    },
    mounted () {
        this.selectTab(0)
    },
    methods: {
        selectTab (i) {
            this.selectedIndex = i
            
            // loop over all the tabs
            this.tabs.forEach((tab, index) => {
                tab.isActive = (index === i)
            })
        }
    }
}
</script>

<style scoped>
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

.tab_selected {
    background: #6880FF;
    background: #6880FF;
    color: #FFFFFF;
}
</style>