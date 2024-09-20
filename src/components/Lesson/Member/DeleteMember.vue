<template>
    <div>
        <RouterLink class="btn btn-secondary" to="/members">Back</RouterLink>
    </div>
    <div>
        <h1>{{ $route.params.id }}</h1>
        <button class="delete-button" @click="deleteItem">Delete</button>
    </div>
</template>

<script>
import Http from '@/helpers/http.js'; // Import your HTTP helper
import { Settings } from '@/config/Setting.js';


export default {
    methods: {
        async deleteItem() {
            const id = this.$route.params.id;
            const url = `${Settings.baseURL}/members/${id}`; // Adjust the URL as per your API

            try {
                const response = await Http.delete(url);
                console.log('Member deleted:', response);

                // Optionally, you can navigate the user to another page after deletion
                // Example: this.$router.push('/items');
            } catch (error) {
                console.error('Error deleting member:', error);
            }
        }
    }
}
</script>

<style>
.delete-button {
    padding: 10px 20px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}
</style>