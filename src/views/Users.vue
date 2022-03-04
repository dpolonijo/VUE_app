<template>
    <!-- <scale-loader v-if="loading" :color="loaderColor"></scale-loader> -->
    <div v-if="!loading">Grid</div>
</template>

<script>
import axios from 'axios';
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';

export default {
    name: 'Users',
    components: {
        ScaleLoader,
    },
    data() {
        return {
            users: [],
            loaderColor: '#CD4929',
            loading: true,
        };
    },
    methods: {
        getUsers() {
            axios
                .get(
                    // 'https://run.mocky.io/v3/efcaa20a-6049-4dc0-9d28-6ece8529dac0?mocky-delay=2000ms'
                    'https://run.mocky.io/v3/efcaa20a-6049-4dc0-9d28-6ece8529dac0'
                )
                .then((response) => {
                    console.log('Users - ', response.data);
                    this.users = response.data;
                    this.loading = false;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    mounted() {
        this.getUsers();
    },
};
</script>

<style>
.v-scale {
    /* Loader size */
    height: 100px !important;
    width: 10px !important;
}
</style>
