<template>
    <b-row class="w-100 list-item">
        <b-col class="list-item-cols" id="list-item-cols-desc">
            <div class="list-item-image"></div>
            <div class="list-item-description">
                <p class="list-item-name">{{username}}</p>
                <p class="list-item-joined">Joined {{username}}</p>
            </div>
        </b-col>
        <b-col class="list-item-cols" id="list-item-cols-options">
            <div class="list-item-options">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 14.2525V18.0025H3.75L14.81 6.9425L11.06 3.1925L0 14.2525ZM17.71 4.0425C18.1 3.6525 18.1 3.0225 17.71 2.6325L15.37 0.2925C14.98 -0.0975 14.35 -0.0975 13.96 0.2925L12.13 2.1225L15.88 5.8725L17.71 4.0425Z" fill="black"/>
                </svg>
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H7H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H7H14V1Z" fill="#343434"/>
                </svg>
            </div>
        </b-col>
    </b-row>
</template>

<style scoped>
.list-item {
    border: 1px solid rgba(167, 167, 167, 0.6);
    box-sizing: border-box;
    border-radius: 16px;
    margin: 10px 0px;
    transition: 0.3s;
}

.list-item:hover {
    background: #6504B5;
    border-radius: 16px;
}

.list-item-cols {
    display: flex;
    align-items: center;
}

#list-item-cols-desc {
    padding: 10px;
}

#list-item-cols-options {
    justify-content: end;
}

.list-item-image {
    width: 34px;
    height: 34px;
    background-color: rgb(122, 115, 115);
    border-radius: 50%;
    transition: 0.35s;
    margin: 0px 29px 0px 23px;
}

.list-item:hover .list-item-image {
    border: 2px solid white;
}

.list-item-name {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    margin: 0px;
    line-height: 24px;
    color: #00000099;
}

.list-item:hover .list-item-name, .list-item:hover .list-item-joined {
    color: white;
}

.list-item-joined {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    margin: 0px;
    color: #00000099;
}

.list-item-options {
    margin: 0px 30px;
}

svg {
    margin: 0px 13px;
}

.list-item:hover path {
    fill: white;
}

.list-item:hover svg {
    cursor: pointer;
}
</style>

<script>
export default {
    name: "ListItem",
    props: ["username"]
}
</script>