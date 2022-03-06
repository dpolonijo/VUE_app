<template>
    <header>
        <img src=".././assets/img/sartura_logo.svg" alt="sartura_logo" />
        <div class="username">
            {{ this.username }}
            <div v-if="loggedInBtn" class="log-out" @click="logOut">
                <i class="fa fa-sign-out"></i>
            </div>
        </div>
    </header>
</template>

<script>
import Swal from 'sweetalert2';
import router from '../router';
import { watch, ref, defineComponent } from 'vue';

export default {
    name: 'Header',
    props: {
        isLoggedIn: Boolean,
    },
    data() {
        return {
            username: 'Unknow user',
            loggedInBtn: false,
        };
    },
    created() {
        this.logIn();
    },
    methods: {
        // Initial page load or page refresh
        logIn() {
            let userLS = JSON.parse(localStorage.getItem('user'));
            console.log('ls - ', userLS);
            if (userLS) {
                this.username = userLS.name;
                this.loggedInBtn = true;
            }
        },
        logOut() {
            Swal.fire({
                title: 'Log out',
                text: 'Are you sure you want to log out?',
                showCancelButton: true,
                confirmButtonColor: '#F55937',
                cancelButtonColor: '#2E2E2E',
                confirmButtonText: 'Log out',
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.clear();
                    this.username = 'Unknow user';
                    this.loggedInBtn = false;
                    this.$parent.$data.isLoggedIn = false;
                    router.push({ path: '/' });
                }
            });
        },
    },
    watch: {
        // Update username of just logged user
        isLoggedIn(newVal, oldVal) {
            console.log('new - ', newVal);
            console.log('old - ', oldVal);
            if (newVal) {
                this.logIn();
            }
        },
    },
};
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
    background: #f55937;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #2e2e2e;
    font-weight: bold;
    padding: 0 15px;
    height: 55px;
}

.log-out {
    margin-left: 15px;
    border: solid 1px #000;
    padding: 5px;
    /* background: #f67f55; */
}

.log-out:hover {
    cursor: pointer;
    background: #f9b97f;
}

.swall2-popup {
    background: #1c1c1c;
}

.swal2-popup .swal2-styled:focus {
    box-shadow: none !important;
}
</style>
