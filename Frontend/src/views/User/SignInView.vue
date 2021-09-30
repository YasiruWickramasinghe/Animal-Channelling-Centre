<template>
    <div>
        <Header />
        <SignIn />
    </div>
</template>

<script>
import SignIn from "../../components/User/SignIn.vue";
import Header from "../../components/Header/Header.Component.vue"
export default {
    name: "SignInVIew",
    components: {
        SignIn,
        Header
    }
}
</script>