<template>
    <div>
        <RouterLink class="btn btn-secondary" to="/loanapplicants">Back</RouterLink>
    </div>
    <div>
        <h1>Edit Member: {{ loanapplicant.id }}</h1>
        <form @submit.prevent="updateLoanapplicant">
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Name:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="name" class='form-control' style='width:100%' v-model="loanapplicant.name">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">mobile:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="mobile" class='form-control' style='width:100%'
                        v-model="loanapplicant.mobile">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Address:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="address" class='form-control' style='width:100%'
                        v-model="loanapplicant.address">

                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">NiD:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="nid" class='form-control' style='width:100%' v-model="loanapplicant.nid">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Photo:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="photo" class='form-control' style='width:100%' v-model="loanapplicant.photo">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Occupation:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="occupation" class='form-control' style='width:100%'
                        v-model="loanapplicant.occupation">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Nominee name:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="nominee_name" class='form-control' style='width:100%'
                        v-model="loanapplicant.nominee_name">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Nominee Account:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="nominee_account" class='form-control' style='width:100%'
                        v-model="loanapplicant.nominee_account">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Loan Amount:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="loan_amount" class='form-control' style='width:100%'
                        v-model="loanapplicant.loan_amount">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Interest Rate:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="interest_rate" class='form-control' style='width:100%'
                        v-model="loanapplicant.interest_rate">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Updated At:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="updated_at" class='form-control' style='width:100%'
                        v-model="loanapplicant.updated_at">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Created At:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="created_at" class='form-control' style='width:100%'
                        v-model="loanapplicant.created_at">
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
            loanapplicant: {
                id: '',
                name: '',
                // Add more properties as needed
            }
        };
    },
    created() {
        this.fetchLoanapplicant();
    },
    methods: {
        async fetchLoanapplicant() {
            const loanapplicantId = this.$route.params.id;
            const url = `${Settings.baseURL}/loanapplicants/${loanapplicantId}`;
            try {
                const response = await Http.get(url);
                this.loanapplicant = response; // Assuming the response is the member object
            } catch (error) {
                console.error('Error fetching loanapplicant:', error);
            }
        },
        async updateLoanapplicant() {
            const loanapplicantId = this.$route.params.id;
            const url = `${Settings.baseURL}/loanapplicants/${loanapplicantId}`;
            try {
                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.loanapplicant)
                });
                // Handle response if needed
                console.log('Loanapplicant updated:', response);
            } catch (error) {
                console.error('Error updating loanapplicant:', error);
            }
        }
    }
}
</script>

<style>
/* Add your CSS styles here */
</style>