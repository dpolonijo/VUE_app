<template>
    <Header />
    <NavSidebar />
    <div class="content">
        <router-view></router-view>
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
};
</script>

<!-- ######################################################## -->

<style>
.content {
    margin: 15px 15px 15px 215px;
    /* padding: 15px;
    border: solid 1px #999; */
    /* background: #ccc; */
}
</style>
