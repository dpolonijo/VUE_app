<template>
    <div v-for="data in this.adminData" :key="data" class="card">
        <h1>{{ data.title }}</h1>
        <p>{{ data.description }}</p>
    </div>
</template>

<!-- ######################################################## -->

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
                    this.adminData = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>

<!-- ######################################################## -->

<style>
.card {
    border: solid 1px #453e39;
    margin-top: 15px;
    padding: 15px;
    background: linear-gradient(#fefefe, #f2f2f2);
}

.card h1 {
    margin: 0;
}

.card p {
    margin: 14px 0 0 0;
}

.card:hover {
    background: #fefefe;
}
</style>
