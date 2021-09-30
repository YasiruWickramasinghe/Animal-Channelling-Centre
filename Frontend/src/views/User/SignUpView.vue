<template>
    <div>
        <Header />
        <SignUp />
    </div>
</template>

<script>
import SignUp from "../../components/User/SignUp.vue";
import Header from "../../components/Header/Header.Component.vue"
export default {
    name: "SignUpView",
    components: {
        SignUp,
        Header
    }
}
</script>