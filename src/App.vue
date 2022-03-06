<template>
    <Header :isLoggedIn="isLoggedIn" />
    <NavSidebar />
    <div class="content">
        <router-view @loginEvent="updateLoginState"></router-view>
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
        };
    },
    methods: {
        updateLoginState(loginState) {
            this.isLoggedIn = loginState;
            console.log('xxx - ', this.isLoggedIn);
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
