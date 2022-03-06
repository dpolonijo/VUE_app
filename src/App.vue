<template>
    <Header :isLoggedIn="isLoggedIn" @loginState="loginState" />
    <NavSidebar :loginStatus="loginStatus" />
    <div class="content">
        <router-view @loginEvent="loginEvent"></router-view>
    </div>
</template>

<!-- ######################################################## -->

<script>
import Header from './components/Header';
import NavSidebar from './components/NavSidebar';

export default {
    name: 'App',
    components: {
        Header,
        NavSidebar,
    },
    data() {
        return {
            isLoggedIn: false,
            loginStatus: false,
        };
    },
    methods: {
        loginEvent(loginState) {
            this.isLoggedIn = loginState;
        },
        loginState(state) {
            this.loginStatus = state;
        },
    },
};
</script>

<!-- ######################################################## -->

<style>
.content {
    margin: 95px 15px 15px 215px;
}
</style>
