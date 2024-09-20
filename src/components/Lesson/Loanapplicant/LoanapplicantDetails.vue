<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router'
import { Settings } from '@/config/Setting.js'
import Http from '@/helpers/http.js'
const route = useRoute()
const loanapplicant = ref(null)

onMounted(async () => {
    let result = Http.get(`${Settings.baseURL}/loanapplicants/${route.params.id}`);
    result.then(function (res) {
        console.log(res);
        loanapplicant.value = res;
    });

});


</script>

<template>
    <div>
        <RouterLink class="btn btn-secondary" to="/loanapplicants">Back</RouterLink>
    </div>
    <div v-if="loanapplicant">
        <h1>Loanapplicant Details</h1>
        <table class="table">
            <tr>
                <th>Name</th>
                <td>{{ loanapplicant.name }}</td>
            </tr>
            <tr>
                <th>Mobile</th>
                <td>{{ loanapplicant.mobile }}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>{{ loanapplicant.address }}</td>
            </tr>

            <tr>
                <th>Nid</th>
                <td>{{ loanapplicant.nid }}</td>
            </tr>
            <tr>
                <th>Photo</th>
                <td>{{ loanapplicant.photo }}</td>
            </tr>
            <tr>
                <th>Occupation</th>
                <td>{{ loanapplicant.occupation }}</td>
            </tr>
            <tr>
                <th>Nominee Name</th>
                <td>{{ loanapplicant.nominee_name }}</td>
            </tr>
            <tr>
                <th>Nominee Account</th>
                <td>{{ loanapplicant.nominee_account }}</td>
            </tr>
            <tr>
                <th>Loan Amount</th>
                <td>{{ loanapplicant.loan_amount }}</td>
            </tr>
            <tr>
                <th>Interest Rate</th>
                <td>{{ loanapplicant.interest_rate }}</td>
            </tr>
            <tr>
                <th>Updated At</th>
                <td>{{ loanapplicant.updated_at }}</td>
            </tr>
            <tr>
                <th>Created At</th>
                <td>{{ loanapplicant.created_at }}</td>
            </tr>

        </table>
    </div>
    <div v-if="!loanapplicant" class="text-center">
        <div class="spinner-border spinner-border-sm"></div>
    </div>

</template>