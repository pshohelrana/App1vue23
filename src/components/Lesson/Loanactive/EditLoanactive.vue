<template>
    <div>
        <RouterLink class="btn btn-secondary" to="/loanactives">Back</RouterLink>
    </div>
    <div>
        <h1>Edit Loanactive: {{ loanactive.id }}</h1>
        <form @submit.prevent="updateLoanactive">
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Name:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="name" class='form-control' style='width:100%' v-model="loanactive.name">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Mobile:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="mobile" class='form-control' style='width:100%' v-model="loanactive.mobile">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Address:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="address" class='form-control' style='width:100%'
                        v-model="loanactive.address">

                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Loansystem:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="loansystem" class='form-control' style='width:100%'
                        v-model="loanactive.loansystem">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Photo:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="photo" class='form-control' style='width:100%' v-model="loanactive.photo">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Loanapplicant:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="loanapplicant" class='form-control' style='width:100%'
                        v-model="loanactive.loanapplicant">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Principle:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="principle" class='form-control' style='width:100%'
                        v-model="loanactive.principle">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Interest Rate:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="interest_rate" class='form-control' style='width:100%'
                        v-model="loanactive.interest_rate">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Total Tk:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="total_tk" class='form-control' style='width:100%'
                        v-model="loanactive.total_tk">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Remark:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="remark" class='form-control' style='width:100%' v-model="loanactive.remark">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Created At:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="updated_at" class='form-control' style='width:100%'
                        v-model="loanactive.updated_at">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Created At:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="created_at" class='form-control' style='width:100%'
                        v-model="loanactive.created_at">
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
            loanactive: {
                id: '',
                name: '',
                // Add more properties as needed
            }
        };
    },
    created() {
        this.fetchLoanactive();
    },
    methods: {
        async fetchLoanactive() {
            const loanactiveId = this.$route.params.id;
            const url = `${Settings.baseURL}/loanactives/${loanactiveId}`;
            try {
                const response = await Http.get(url);
                this.loanactive = response; // Assuming the response is the member object
            } catch (error) {
                console.error('Error fetching loanactive:', error);
            }
        },
        async updateLoanactive() {
            const loanactiveId = this.$route.params.id;
            const url = `${Settings.baseURL}/loanactives/${loanactiveId}`;
            try {
                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.loanactive)
                });
                // Handle response if needed
                console.log('Loanactive updated:', response);
            } catch (error) {
                console.error('Error updating loanactive:', error);
            }
        }
    }
}
</script>

<style>
/* Add your CSS styles here */
</style>