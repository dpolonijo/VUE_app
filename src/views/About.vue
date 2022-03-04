<template>
    <div class="about-wrap">
        <div class="about-left"></div>
        <div class="about-right"></div>
    </div>
</template>

<style>
.about-wrap {
    display: flex;
    align-items: stretch;
    background-color: #f1f1f1;
}

.about-wrap div {
    background: #ccc;
    margin: 15px 0 15px 15px;
    height: 500px;
}

.about-left {
    flex-grow: 3;
}
.about-right {
    flex-grow: 7;
    margin-right: 15px !important;
}
</style>
