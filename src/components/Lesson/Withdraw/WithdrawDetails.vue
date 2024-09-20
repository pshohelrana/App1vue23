<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router'
import { Settings } from '@/config/Setting.js'
import Http from '@/helpers/http.js'
const route = useRoute()
const withdraw = ref(null)

onMounted(async () => {
    let result = Http.get(`${Settings.baseURL}/withdraws/${route.params.id}`);
    result.then(function (res) {
        console.log(res);
        withdraw.value = res;
    });

});


</script>

<template>
    <div>
        <RouterLink class="btn btn-secondary" to="/withdraws">Back</RouterLink>
    </div>
    <div v-if="withdraw">
        <h1>Withdraw Details</h1>
        <table class="table">
            <tr>
                <th>Name</th>
                <td>{{ withdraw.name }}</td>
            </tr>
            <tr>
                <th>Policy</th>
                <td>{{ withdraw.policy }}</td>
            </tr>
            <tr>
                <th>Last Name</th>
                <td>{{ withdraw.lastname }}</td>
            </tr>

            <tr>
                <th>Loan Amount</th>
                <td>{{ withdraw.loanamount }}</td>
            </tr>
            <tr>
                <th>Interest Rate</th>
                <td>{{ withdraw.interest_rate }}</td>
            </tr>
            <tr>
                <th>Net Amount</th>
                <td>{{ withdraw.net_amount }}</td>
            </tr>
            <tr>
                <th>Member ID</th>
                <td>{{ withdraw.member_id }}</td>
            </tr>

            <tr>
                <th>Updated At</th>
                <td>{{ withdraw.updasted_at }}</td>
            </tr>
            <tr>
                <th>Created At</th>
                <td>{{ withdraw.created_at }}</td>
            </tr>

        </table>
    </div>
    <div v-if="!withdraw" class="text-center">
        <div class="spinner-border spinner-border-sm"></div>
    </div>

</template>