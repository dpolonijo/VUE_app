<template>
    <header>
        <img src=".././assets/img/sartura_logo.svg" alt="sartura_logo" />
        <div class="username">
            {{ this.username }}
            <div v-if="loginState" class="log-out" @click="logOut">
                <i class="fa fa-sign-out"></i>
            </div>
        </div>
    </header>
</template>

<!-- ######################################################## -->

<script>
import Swal from 'sweetalert2';
import router from '../router';

export default {
    name: 'Header',
    props: {
        isLoggedIn: Boolean,
    },
    data() {
        return {
            username: 'Unknow user',
            loginState: false,
        };
    },
    created() {
        this.logIn();
    },
    methods: {
        // Initial page load or page refresh
        logIn() {
            let userLS = JSON.parse(localStorage.getItem('user'));
            if (userLS) {
                this.$emit('loginState', true);
                this.username = userLS.name;
                this.loginState = true;
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
                    this.loginState = false;
                    this.$parent.$data.isLoggedIn = false;
                    router.push({ path: '/' });
                }
            });
        },
    },
    watch: {
        // Update username of just logged user
        isLoggedIn(newVal) {
            // Emit global login status through parent component (App.vue) to NavSidebar
            this.$emit('loginState', newVal);
            if (newVal) {
                this.logIn();
            }
        },

        // Restrict route if user not logged in
        $route(to) {
            if (
                (to.name === 'About' || to.name === 'Admin') &&
                !this.loginState
            ) {
                // Redirect
                router.replace('/');
                // Show message
                Swal.fire({
                    title: 'URL restricted',
                    text: 'You must login to access this page!',
                    confirmButtonColor: '#F55937',
                });
            }
        },
    },
};
</script>

<!-- ######################################################## -->

<style>
header {
    height: 80px;
    background: #2e2e2e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    position: fixed;
    top: 0;
    width: 100%;
}

.username {
    background: linear-gradient(#eb5830, #d24c28);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #2e2e2e;
    font-weight: bold;
    padding: 0 15px;
    height: 55px;
    margin-right: 32px;
}

.log-out {
    margin-left: 15px;
    border: solid 1px #000;
    padding: 5px;
}

.log-out:hover {
    cursor: pointer;
    background: #f9b97f;
}

.swal2-popup {
    margin-left: 120px;
    background: linear-gradient(#fefefe, #f00);
}

.swal2-popup .swal2-styled:focus {
    box-shadow: none !important;
}

.swal2-popup.swal2-modal.swal2-show {
    background: linear-gradient(#fefefe, #d3d2d1);
}
</style>
