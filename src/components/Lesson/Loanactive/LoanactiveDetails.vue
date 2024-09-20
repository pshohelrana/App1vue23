<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router'
import { Settings } from '@/config/Setting.js'
import Http from '@/helpers/http.js'
const route = useRoute()
const loanactive = ref(null)

onMounted(async () => {
    let result = Http.get(`${Settings.baseURL}/loanactives/${route.params.id}`);
    result.then(function (res) {
        console.log(res);
        loanactive.value = res;
    });

});


</script>

<template>
    <div>
        <RouterLink class="btn btn-secondary" to="/loanactives">Back</RouterLink>
    </div>
    <div v-if="loanactive">
        <h1>Loanactive Details</h1>
        <table class="table">
            <tr>
                <th>Name</th>
                <td>{{ loanactive.name }}</td>
            </tr>
            <tr>
                <th>Mobile</th>
                <td>{{ loanactive.mobile }}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>{{ loanactive.address }}</td>
            </tr>

            <tr>
                <th>Loan system</th>
                <td>{{ loanactive.loansystem }}</td>
            </tr>
            <tr>
                <th>Loan applicant</th>
                <td>{{ loanactive.loanapplicant }}</td>
            </tr>
            <tr>
                <th>Photo</th>
                <td>{{ loanactive.photo }}</td>
            </tr>
            <tr>
                <th>Interest Rate</th>
                <td>{{ loanactive.interest_rate }}</td>
            </tr>
            <tr>
                <th>EMI</th>
                <td>{{ loanactive.emi }}</td>
            </tr>
            <tr>
                <th>Total TK</th>
                <td>{{ loanactive.total_tk }}</td>
            </tr>
            <tr>
                <th>Remark</th>
                <td>{{ loanactive.remark }}</td>
            </tr>
            <tr>
                <th>Updated At</th>
                <td>{{ loanactive.updated_at }}</td>
            </tr>
            <tr>
                <th>Created At</th>
                <td>{{ loanactive.created_at }}</td>
            </tr>

        </table>
    </div>
    <div v-if="!loanactive" class="text-center">
        <div class="spinner-border spinner-border-sm"></div>
    </div>

</template>