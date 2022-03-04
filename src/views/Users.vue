<template>
    <!-- <scale-loader v-if="loading" :color="loaderColor"></scale-loader> -->
    <!-- <div v-if="!loading">Grid</div> -->
    <table class="user-tbl">
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
            loggedUserData: [],
            isUserPrivileged: false,
        };
    },
    mounted() {
        this.getUsers();
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
            } else {
                this.isUserPrivileged = false;
            }

            console.log('Is user privileged - ', this.isUserPrivileged);
        },
    },
};
</script>

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
    border: solid 1px #ccc;
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
    background: #2e2e2e;
    color: #ccc;
}

.user-tbl tbody tr:nth-child(even) {
    background-color: #f2f2f2;
}

.user-tbl tbody tr:hover {
    background: rgb(224, 223, 223);
    /* color: #fff; */
    cursor: pointer;
}
</style>
