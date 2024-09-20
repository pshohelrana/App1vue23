<template>
    <div>
        <RouterLink class="btn btn-secondary" to="/diposits">Back</RouterLink>
    </div>
    <div>
        <h1>Edit Diposit: {{ diposit.id }}</h1>
        <form @submit.prevent="updateDiposit">
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Name:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="name" class='form-control' style='width:100%' v-model="diposit.name">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Mobile:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="mobile" class='form-control' style='width:100%' v-model="diposit.mobile">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Address:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="address" class='form-control' style='width:100%' v-model="diposit.address">

                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Principle:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="principle" class='form-control' style='width:100%'
                        v-model="diposit.principle">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Paid:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="paid" class='form-control' style='width:100%' v-model="diposit.paid">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Due:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="due" class='form-control' style='width:100%' v-model="diposit.due">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Loanactive ID:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="laonactive_id" class='form-control' style='width:100%'
                        v-model="diposit.loanactive_id">
                </div>
            </div>

            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Updated At:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="updated_at" class='form-control' style='width:100%'
                        v-model="diposit.updated_at">
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-2">
                    <label for="name">Created At:</label>
                </div>
                <div class="col-10">
                    <input type="text" id="created_at" class='form-control' style='width:100%'
                        v-model="diposit.created_at">
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
            diposit: {
                id: '',
                name: '',
                // Add more properties as needed
            }
        };
    },
    created() {
        this.fetchDiposit();
    },
    methods: {
        async fetchDiposit() {
            const dipositId = this.$route.params.id;
            const url = `${Settings.baseURL}/diposits/${dipositId}`;
            try {
                const response = await Http.get(url);
                this.diposit = response; // Assuming the response is the member object
            } catch (error) {
                console.error('Error fetching diposit:', error);
            }
        },
        async updateDiposit() {
            const dipositId = this.$route.params.id;
            const url = `${Settings.baseURL}/diposits/${dipositId}`;
            try {
                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.diposit)
                });
                // Handle response if needed
                console.log('Diposit updated:', response);
            } catch (error) {
                console.error('Error updating diposit:', error);
            }
        }
    }
}
</script>

<style>
/* Add your CSS styles here */
</style>