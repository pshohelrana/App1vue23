<template>
    <div>
        <RouterLink class="btn btn-secondary" to="/members">Back</RouterLink>
    </div>
    <div>
        <h1>Edit Member: {{ member.id }}</h1>
        <form @submit.prevent="updateMember">
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Name:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="name" class='form-control' style='width:100%' v-model="member.name">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">LastName:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="lastname" class='form-control' style='width:100%' v-model="member.lastname">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Address:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="address" class='form-control' style='width:100%' v-model="member.address">

                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">NiD:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="nid" class='form-control' style='width:100%' v-model="member.nid">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Photo:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="photo" class='form-control' style='width:100%' v-model="member.photo">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Deposit:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="deposit" class='form-control' style='width:100%' v-model="member.deposit">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Withdraw:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="withdraw" class='form-control' style='width:100%' v-model="member.withdraw">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Total Amount:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="total_amount" class='form-control' style='width:100%'
                        v-model="member.total_amount">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Created At:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="updated_at" class='form-control' style='width:100%'
                        v-model="member.updated_at">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Created At:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="created_at" class='form-control' style='width:100%'
                        v-model="member.created_at">
                </div>
            </div>
            <!-- Add more form fields for other properties of the member -->
            <div>
                <button type="submit" class="btn btn-info">Update</button>
            </div>
        </form>
    </div>
</template>

<script>
import Http from '@/helpers/http.js'; // Import your HTTP helper
import { Settings } from '@/config/Setting.js';

export default {
    data() {
        return {
            member: {
                id: '',
                name: '',
                // Add more properties as needed
            }
        };
    },
    created() {
        this.fetchMember();
    },
    methods: {
        async fetchMember() {
            const memberId = this.$route.params.id;
            const url = `${Settings.baseURL}/members/${memberId}`;
            try {
                const response = await Http.get(url);
                this.member = response; // Assuming the response is the member object
            } catch (error) {
                console.error('Error fetching member:', error);
            }
        },
        async updateMember() {
            const memberId = this.$route.params.id;
            const url = `${Settings.baseURL}/members/${memberId}`;
            try {
                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.member)
                });
                // Handle response if needed
                console.log('Member updated:', response);
            } catch (error) {
                console.error('Error updating member:', error);
            }
        }
    }
}
</script>

<style>
/* Add your CSS styles here */
</style>