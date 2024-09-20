<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router'
import { Settings } from '@/config/Setting.js'
import Http from '@/helpers/http.js'
const route = useRoute()
const member = ref(null)

onMounted(async () => {
    let result = Http.get(`${Settings.baseURL}/members/${route.params.id}`);
    result.then(function (res) {
        console.log(res);
        member.value = res;
    });

});


</script>

<template>
    <div>
        <RouterLink class="btn btn-secondary" to="/members">Back</RouterLink>
    </div>
    <div v-if="member">
        <h1>Member Details</h1>
        <table class="table">
            <tr>
                <th>Name</th>
                <td>{{ member.name }}</td>
            </tr>
            <tr>
                <th>LastName</th>
                <td>{{ member.lastname }}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>{{ member.address }}</td>
            </tr>

            <tr>
                <th>Nid</th>
                <td>{{ member.nid }}</td>
            </tr>
            <tr>
                <th>Photo</th>
                <td>{{ member.photo }}</td>
            </tr>
            <tr>
                <th>Deposit</th>
                <td>{{ member.deposit }}</td>
            </tr>
            <tr>
                <th>Withdraw</th>
                <td>{{ member.withdraw }}</td>
            </tr>
            <tr>
                <th>Total Amount</th>
                <td>{{ member.total_amount }}</td>
            </tr>
            <tr>
                <th>Updated At</th>
                <td>{{ member.updated_at }}</td>
            </tr>
            <tr>
                <th>Created At</th>
                <td>{{ member.created_at }}</td>
            </tr>

        </table>
    </div>
    <div v-if="!member" class="text-center">
        <div class="spinner-border spinner-border-sm"></div>
    </div>

</template>