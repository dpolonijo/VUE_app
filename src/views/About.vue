<template>
    <div class="about-wrap">
        <div class="about-left">
            <div class="user-img">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
            </div>
            <h2>{{ this.user.username }}</h2>
            <h4>{{ this.user.name }}</h4>
            <p>{{ this.user.email }}</p>
        </div>
        <div class="about-right">
            <table class="about-tbl">
                <tr class="header-row">
                    <td><h2>About me</h2></td>
                    <td></td>
                </tr>
                <tr class="separator">
                    <td>User Id</td>
                    <td>Name</td>
                </tr>
                <tr>
                    <td>{{ this.user.id }}</td>
                    <td>{{ this.user.name }}</td>
                </tr>
                <tr class="separator">
                    <td>Phone</td>
                    <td>Email</td>
                </tr>
                <tr>
                    <td>{{ this.user.phone }}</td>
                    <td>{{ this.user.email }}</td>
                </tr>

                <!--  -->

                <tr class="header-row">
                    <td><h2>Address</h2></td>
                    <td></td>
                </tr>
                <tr class="separator">
                    <td>Street</td>
                    <td>Suite</td>
                </tr>
                <tr>
                    <td>{{ this.address.street }}</td>
                    <td>{{ this.address.suite }}</td>
                </tr>
                <tr class="separator">
                    <td>City</td>
                    <td>Zip-code</td>
                </tr>
                <tr>
                    <td>{{ this.address.city }}</td>
                    <td>{{ this.address.zipcode }}</td>
                </tr>

                <!--  -->

                <tr class="header-row">
                    <td><h2>Company</h2></td>
                    <td></td>
                </tr>
                <tr class="separator">
                    <td>Name</td>
                    <td>Description</td>
                </tr>
                <tr>
                    <td>{{ this.company.name }}</td>
                    <td>{{ this.company.catchPhrase }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            user: [],
            address: [],
            company: [],
        };
    },
    mounted() {
        this.getUserDetails();
    },
    methods: {
        getUserDetails() {
            this.user = JSON.parse(localStorage.getItem('user'));
            console.log('User data from LS - ', this.user);
            this.address = this.user.address;
            this.company = this.user.company;
        },
    },
};
</script>

<style>
.about-wrap {
    display: flex;
    color: #2e2e2e;
}

.about-left,
.about-right {
    background: #e5dddc;
    min-height: 500px;
    border: solid 1px #a09f9f;
}

.about-left {
    flex: 1;
    flex-grow: 3;
    text-align: center;
}
.about-right {
    flex: 1;
    flex-grow: 7;
    margin-left: 15px;
    padding: 5px 15px;
    box-sizing: border-box;
}

.user-img {
    font-size: 120px;
    margin-top: 80px;
}

.about-wrap h2,
.about-wrap h4,
.about-wrap p {
    margin: 7px;
}

/* Table */

.about-tbl {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
    margin-top: 5px;
}

.about-tbl .header-row td {
    border-bottom: solid 1px #333;
}

.about-tbl .header-row td:not(.about-tbl .header-row:first-child td) {
    padding-top: 20px;
}

.about-tbl td:not(.about-tbl .header-row td) {
    padding-left: 15px;
}

.about-tbl .separator td {
    padding-top: 15px;
    font-weight: bold;
}

.about-tbl h2 {
    margin-left: 0;
}

/* Responsive layout */

@media only screen and (max-width: 800px) {
    .about-wrap {
        display: block;
    }

    .user-img {
        margin-top: 0;
    }

    .about-left,
    .about-right {
        min-height: initial;
        margin-top: 15px;
    }

    .about-left {
        padding: 15px;
    }

    .about-right {
        margin-left: 0;
    }
}
</style>
