<template>
    <header>
        <img src=".././assets/img/sartura_logo.svg" alt="sartura_logo">
        <div class="username">
            Unknow user
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header'
}

</script>

<style>
    header {
        height: 80px;
        background: #2e2e2e;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
    }
    .username {
        width: 150px;
        height: 60px;
        background: #D54B30;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: #2e2e2e;
        font-weight: bold;
    }
</style>
