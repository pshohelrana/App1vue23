<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router'
import { Settings } from '@/config/Setting.js'
import Http from '@/helpers/http.js'
const route = useRoute()
const diposit = ref(null)

onMounted(async () => {
    let result = Http.get(`${Settings.baseURL}/diposits/${route.params.id}`);
    result.then(function (res) {
        console.log(res);
        diposit.value = res;
    });

});


</script>

<template>
    <div>
        <RouterLink class="btn btn-secondary" to="/diposits">Back</RouterLink>
    </div>
    <div v-if="diposit">
        <h1>Diposit Details</h1>
        <table class="table">
            <tr>
                <th>Name</th>
                <td>{{ diposit.name }}</td>
            </tr>
            <tr>
                <th>Mobile</th>
                <td>{{ diposit.mobile }}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>{{ diposit.address }}</td>
            </tr>

            <tr>
                <th>principle</th>
                <td>{{ diposit.principle }}</td>
            </tr>

            <tr>
                <th>Paid</th>
                <td>{{ diposit.paid }}</td>
            </tr>
            <tr>
                <th>due</th>
                <td>{{ diposit.due }}</td>
            </tr>
            <tr>
                <th>Loanactive ID</th>
                <td>{{ diposit.loanactive_id }}</td>
            </tr>
            <tr>
                <th>Updated At</th>
                <td>{{ diposit.updated_at }}</td>
            </tr>
            <tr>
                <th>Created At</th>
                <td>{{ diposit.created_at }}</td>
            </tr>

        </table>
    </div>
    <div v-if="!diposit" class="text-center">
        <div class="spinner-border spinner-border-sm"></div>
    </div>

</template>