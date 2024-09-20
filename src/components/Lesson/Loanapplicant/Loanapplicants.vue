<script setup>

import { ref } from 'vue';
import { Settings } from '@/config/Setting.js'

import Http from '@/helpers/http.js'
import { html } from '@/helpers/html.js'

//-----vars-----
const loanapplicants = ref(null);

//-----get-----
const result = Http.get(`${Settings.baseURL}/loanapplicants`);
result.then(function (res) {
    //console.log(res.data);
    loanapplicants.value = res.loanapplicants;
});
//console.log()

//-----delete----
function Delete(id) {

    let res = Http.delete(`${Settings.baseURL}/loanapplicants/${id}`);
    console.log(res);

}

//----Find----------
function Find(id) {
    let result = Http.get(`${Settings.baseURL}/loanapplicants/${id}`)
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
                <RouterLink class="btn btn-info" to="/loanapplicants/create">New Loanapplicant</RouterLink>
            </div>
        </h5>


        <div class="card-body">

            <div v-if="loanapplicants">

                <table class="table table-striped">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>NiD</th>
                        <th>Photo</th>
                        <th>Occupation</th>
                        <th>Nominee Name</th>
                        <th>Nominee Account</th>
                        <th>Loan Amount</th>
                        <th>Interest Rate</th>
                        <th>Updated At</th>
                        <th>Created At</th>

                        <th style="text-align: right;">Action</th>

                    </tr>
                    <tr v-for="loanapplicant in loanapplicants" :key="loanapplicant.id">
                        <td>{{ loanapplicant.id }}</td>
                        <td>{{ loanapplicant.name }}</td>
                        <td>{{ loanapplicant.mobile }}</td>
                        <td>{{ loanapplicant.address }}</td>
                        <td>{{ loanapplicant.nid }}</td>
                        <td>{{ loanapplicant.photo }}</td>
                        <td>{{ loanapplicant.occupation }}</td>
                        <td>{{ loanapplicant.nominee_name }}</td>
                        <td>{{ loanapplicant.nominee_account }}</td>
                        <td>{{ loanapplicant.loan_amount }}</td>
                        <td>{{ loanapplicant.interest_rate }}</td>
                        <td>{{ loanapplicant.updated_at }}</td>
                        <td>{{ loanapplicant.created_at }}</td>

                        <td style="text-align: right;">
                            <div class="btn-group">
                                <RouterLink :to="'/loanapplicants/edit/' + loanapplicant.id" class="btn btn-primary">
                                    Edit
                                </RouterLink>
                                <RouterLink :to="'/loanapplicants/details/' + loanapplicant.id" class="btn btn-success">
                                    View
                                </RouterLink>
                                <RouterLink :to="'/loanapplicants/delete/' + loanapplicant.id" class="btn btn-danger">
                                    Delete
                                </RouterLink>
                            </div>

                        </td>
                    </tr>
                </table>
            </div>
            <div v-if="!loanapplicants" class="text-center">
                <div class="spinner-border spinner-border-sm"></div>
            </div>
        </div>
    </div>
</template>