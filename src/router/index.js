import { createWebHistory, createRouter } from "vue-router";
import About from '../views/About'
import Admin from '../views/Admin'
import Users from '../views/Users'

const routes = [{
        path: '/',
        redirect: '/users'
    },
    {
        path: "/users",
        name: "Users",
        component: Users
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-link'
});

export default router;