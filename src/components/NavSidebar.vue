<template>
    <ul class="nav">
        <li><a href="#">Users</a></li>
        <li><a href="#">About me</a></li>
        <li><a href="#">Admin only</a></li>
    </ul>
</template>

<script>

export default {
    name: 'NavSidebar'
}

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
</style>
