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
            // console.log('xxx - ', this.isLoggedIn);
        },
        loginState(state) {
            this.loginStatus = state;
            // console.log('App state - ', state);
        },
    },
};
</script>

<!-- ######################################################## -->

<style>
.content {
    margin: 15px 15px 15px 215px;
}
</style>
