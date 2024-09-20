<template>
    <div>
        <RouterLink class="btn btn-secondary" to="/withdraws">Back</RouterLink>
    </div>
    <div>
        <h1>Edit Withdraw: {{ withdraw.id }}</h1>
        <form @submit.prevent="updateWithdraw">
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Name:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="name" class='form-control' style='width:100%' v-model="withdraw.name">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">LastName:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="lastname" class='form-control' style='width:100%'
                        v-model="withdraw.lastname">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Policy:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="policy" class='form-control' style='width:100%' v-model="withdraw.policy">

                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Loan Amount:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="loanamount" class='form-control' style='width:100%'
                        v-model="withdraw.loanamount">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Interest Rate:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="interest_rate" class='form-control' style='width:100%'
                        v-model="withdraw.interest_rate">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Net Amount:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="net_amount" class='form-control' style='width:100%'
                        v-model="withdraw.net_amount">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Member ID:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="member_id" class='form-control' style='width:100%'
                        v-model="withdraw.member_id">
                </div>
            </div>

            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Created At:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="updated_at" class='form-control' style='width:100%'
                        v-model="withdraw.updated_at">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Created At:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="created_at" class='form-control' style='width:100%'
                        v-model="withdraw.created_at">
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
            withdraw: {
                id: '',
                name: '',
                // Add more properties as needed
            }
        };
    },
    created() {
        this.fetchWithdraw();
    },
    methods: {
        async fetchWithdraw() {
            const withdrawId = this.$route.params.id;
            const url = `${Settings.baseURL}/withdraws/${withdrawId}`;
            try {
                const response = await Http.get(url);
                this.withdraw = response; // Assuming the response is the member object
            } catch (error) {
                console.error('Error fetching withdraw:', error);
            }
        },
        async updateWithdraw() {
            const withdrawId = this.$route.params.id;
            const url = `${Settings.baseURL}/withdraws/${withdrawId}`;
            try {
                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.withdraw)
                });
                // Handle response if needed
                console.log('Withdraw updated:', response);
            } catch (error) {
                console.error('Error updating withdraw:', error);
            }
        }
    }
}
</script>

<style>
/* Add your CSS styles here */
</style>