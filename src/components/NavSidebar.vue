<template>
    <ul class="nav">
        <li><router-link to="/users">Users</router-link></li>
        <li v-if="loginStatus">
            <router-link to="/about">About me</router-link>
        </li>
        <li v-else><a href="#" class="disabled">About me</a></li>
        <li v-if="loginStatus">
            <router-link to="/admin">Admin only</router-link>
        </li>
        <li v-else><a href="#" class="disabled">Admin only</a></li>
    </ul>
</template>

<!-- ######################################################## -->

<script>
export default {
    name: 'NavSidebar',
    props: {
        loginStatus: Boolean,
    },
};
</script>

<!-- ######################################################## -->

<style>
ul.nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 100%;
    position: fixed;
    overflow: hidden;
    background: #2e2e2e;
    display: block;
    top: 80px;
}

.nav li a {
    display: block;
    width: 170px;
    background: linear-gradient(#686868, #5e5e5e);
    text-decoration: none;
    border-bottom: solid 1px #5d5d5d;
    font-size: 22px;
    padding: 12px 15px;
    color: #ccc;
}

.nav li a:hover {
    background: #e7e1db;
    color: #686868;
}

.nav .active-link {
    background: #e7e1db !important;
    color: #686868 !important;
}

.nav li a.disabled {
    background: #2e2e2e;
    color: #ccc;
    cursor: not-allowed;
}
</style>
