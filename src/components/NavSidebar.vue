<template>
    <ul class="nav">
        <li><router-link to="/users">Users</router-link></li>
        <li><router-link to="/about">About me</router-link></li>
        <li><router-link to="/admin">Admin only</router-link></li>
    </ul>
</template>

<script>
export default {
    name: 'NavSidebar',
};
</script>

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
}

.nav li a {
    display: block;
    width: 170px;
    background: #686868;
    text-decoration: none;
    border-bottom: solid 1px #ccc;
    font-size: 22px;
    padding: 12px 15px;
    color: #ccc;
}

.nav li a:hover {
    background: #ccc;
    color: #686868;
}

.nav .active-link {
    background: #ccc !important;
    color: #686868 !important;
}
</style>
