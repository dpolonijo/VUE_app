<template>
    <table v-if="!loading" class="user-tbl">
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(user, index) in this.users"
                :key="user.id"
                @dblclick="rowDblClick(index)"
            >
                <td>{{ user.name }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
            </tr>
        </tbody>
    </table>

    <div v-if="loading" class="loader-wrap">
        <h1>Loading</h1>
        <scale-loader :color="loaderColor"></scale-loader>
        <h2>Please wait...</h2>
    </div>
</template>

<!-- ######################################################## -->

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
            loaderColor: '#F55A37',
            loading: true,
            loggedUserData: [],
            isUserPrivileged: false,
        };
    },
    mounted() {
        this.getUsers();
    },
    emits: ['loginEvent'],
    methods: {
        getUsers() {
            axios
                .get(
                    'https://run.mocky.io/v3/efcaa20a-6049-4dc0-9d28-6ece8529dac0?mocky-delay=10000ms'
                    // 'https://run.mocky.io/v3/efcaa20a-6049-4dc0-9d28-6ece8529dac0'
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
        rowDblClick(index) {
            this.loggedUserData = this.users[index];

            // Is user privileged?
            let email = this.loggedUserData.email;
            if (email.slice(email.length - 4) === '.net') {
                this.isUserPrivileged = true;
                // Save privileged user to local storage
                localStorage.setItem(
                    'user',
                    JSON.stringify(this.loggedUserData)
                );
                // Pass information about successfully login to header component
                this.$emit('loginEvent', true);
            } else {
                // Not .net domain
                this.isUserPrivileged = false;
            }
        },
    },
};
</script>

<!-- ######################################################## -->

<style>
.content {
    padding: 0;
    border: 0;
}
.v-scale {
    /* Loader size */
    height: 100px !important;
    width: 10px !important;
}

/* Table */

.user-tbl {
    border-collapse: collapse;
    width: 100%;
    background: #e4e4e4;
    border: solid 1px #453e39;
}

.user-tbl thead th,
.user-tbl tbody tr td {
    padding: 10px 5px;
    text-align: left;
    width: 33%;
    padding: 15px 15px;
}

.user-tbl thead th {
    font-size: 14px;
    background: linear-gradient(#3e3c3c, #4b4b4b);
    color: #e3dad4;
}

.user-tbl tbody tr:nth-child(even) {
    background-color: #f2f2f2;
}

.user-tbl tbody tr:hover {
    background: linear-gradient(#a2a2a2, #959595);
    cursor: pointer;
    color: #ffffff;
}

.loader-wrap {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-right: 70px;
}
</style>
