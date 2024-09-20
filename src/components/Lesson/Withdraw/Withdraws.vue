<script setup>

import { ref } from 'vue';
import { Settings } from '@/config/Setting.js'

import Http from '@/helpers/http.js'
import { html } from '@/helpers/html.js'

//-----vars-----
const withdraws = ref(null);

//-----get-----
const result = Http.get(`${Settings.baseURL}/withdraws`);
result.then(function (res) {
    //console.log(res.data);
    withdraws.value = res.withdraws;
});
//console.log()

//-----delete----
function Delete(id) {

    let res = Http.delete(`${Settings.baseURL}/withdraws/${id}`);
    console.log(res);

}

//----Find----------
function Find(id) {
    let result = Http.get(`${Settings.baseURL}/withdraws/${id}`)
    result.then((data) => {
        console.log(data);
    });

    //https://stackoverflow.com/questions/35914069/how-can-i-get-query-parameters-from-a-url-in-vue-js
    let urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
}

//----update-----


//----put-----

</script>

<template>
    <div class="card m-3">

        <h5 class="card-header">

            <div>
                <RouterLink class="btn btn-info" to="/withdraws/create">New Withdraw</RouterLink>
            </div>
        </h5>


        <div class="card-body">

            <div v-if="withdraws">

                <table class="table table-striped">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Policy</th>
                        <th>Last Name</th>
                        <th>Loan Amount</th>
                        <th>Interest Rate</th>
                        <th>Net Amount</th>
                        <th>Member ID</th>

                        <th>Updated At</th>
                        <th>Created At</th>

                        <th style="text-align: right;">Action</th>

                    </tr>
                    <tr v-for="withdraw in withdraws" :key="withdraw.id">
                        <td>{{ withdraw.id }}</td>
                        <td>{{ withdraw.name }}</td>
                        <td>{{ withdraw.policy }}</td>
                        <td>{{ withdraw.lastname }}</td>
                        <td>{{ withdraw.loanamount }}</td>
                        <td>{{ withdraw.interest_rate }}</td>
                        <td>{{ withdraw.net_amount }}</td>
                        <td>{{ withdraw.member_id }}</td>
                        <td>{{ withdraw.updated_at }}</td>
                        <td>{{ withdraw.created_at }}</td>

                        <td style="text-align: right;">
                            <div class="btn-group">
                                <RouterLink :to="'/withdraws/edit/' + withdraw.id" class="btn btn-primary">Edit
                                </RouterLink>
                                <RouterLink :to="'/withdraws/details/' + withdraw.id" class="btn btn-success">View
                                </RouterLink>
                                <RouterLink :to="'/withdraws/delete/' + withdraw.id" class="btn btn-danger">Delete
                                </RouterLink>
                            </div>

                        </td>
                    </tr>
                </table>
            </div>
            <div v-if="!members" class="text-center">
                <div class="spinner-border spinner-border-sm"></div>
            </div>
        </div>
    </div>
</template>