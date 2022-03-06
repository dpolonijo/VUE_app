<template>
    <div v-for="data in this.adminData" :key="data">
        <h1>{{ data.title }}</h1>
        <p>{{ data.description }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Admin',
    data() {
        return {
            adminData: [],
        };
    },
    mounted() {
        this.getAdminData();
    },
    emits: ['loginEvent'],
    methods: {
        getAdminData() {
            axios
                .get(
                    'https://run.mocky.io/v3/9571eb2c-56a7-46cc-80bf-9c1e341f1270'
                )
                .then((response) => {
                    console.log('Admin data - ', response.data);
                    this.adminData = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
