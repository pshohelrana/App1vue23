<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in result" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.website }}</td>

                    <!-- <td>Doe</td>
                    <td>john@example.com</td> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Userlist',
    data() {
        return {
            result: [],
        };
    },
    props: {
        msg: String
    },
    mounted() {

        this.Getemployee();

    },
    methods: {
        Getemployee() {
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                console.log(res.data);
                this.result = res.data;
                console.log(this.result);
            })
        }
    }
}
</script>