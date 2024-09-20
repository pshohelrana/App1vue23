<script setup>

import { ref } from 'vue';
import { Settings } from '@/config/Setting.js'

import Http from '@/helpers/http.js'
import { html } from '@/helpers/html.js'

//-----vars-----
const loanactives = ref(null);

//-----get-----
const result = Http.get(`${Settings.baseURL}/loanactives`);
result.then(function (res) {
    console.log(res.data);
    loanactives.value = res.data;
});
//console.log()

//-----delete----
function Delete(id) {

    let res = Http.delete(`${Settings.baseURL}/loanactives/${id}`);
    console.log(res);

}

//----Find----------
function Find(id) {
    let result = Http.get(`${Settings.baseURL}/loanactives/${id}`)
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
                <RouterLink class="btn btn-info" to="/loanactives/create">New Loanactive</RouterLink>
            </div>
        </h5>


        <div class="card-body">

            <div v-if="loanactives">

                <table class="table table-striped">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Loan System</th>
                        <th>Loan Applicant</th>
                        <th>Principle</th>
                        <th>Interest_Rate</th>
                        <th>EMI</th>
                        <th>Total Tk</th>
                        <th>Remark</th>
                        <th>Photo</th>
                        <th>Updated AT</th>
                        <th>Created AT</th>

                        <th style="text-align: right;">Action</th>

                    </tr>
                    <tr v-for="loanactive in loanactives" :key="loanactive.id">
                        <td>{{ loanactive.id }}</td>
                        <td>{{ loanactive.name }}</td>
                        <td>{{ loanactive.mobile }}</td>
                        <td>{{ loanactive.address }}</td>
                        <td>{{ loanactive.loansystem }}</td>
                        <td>{{ loanactive.loanapplicant }}</td>
                        <td>{{ loanactive.principle }}</td>
                        <td>{{ loanactive.interest_rate }}</td>
                        <td>{{ loanactive.emi }}</td>
                        <td>{{ loanactive.total_tk }}</td>
                        <td>{{ loanactive.remark }}</td>
                        <td>{{ loanactive.photo }}</td>
                        <td>{{ loanactive.updated_at }}</td>
                        <td>{{ loanactive.created_at }}</td>

                        <td style="text-align: right;">
                            <div class="btn-group">
                                <RouterLink :to="'/loanactives/edit/' + loanactive.id" class="btn btn-primary">Edit
                                </RouterLink>
                                <RouterLink :to="'/loanactives/details/' + loanactive.id" class="btn btn-success">View
                                </RouterLink>
                                <RouterLink :to="'/loanactives/delete/' + loanactive.id" class="btn btn-danger">Delete
                                </RouterLink>
                            </div>

                        </td>
                    </tr>
                </table>
            </div>
            <div v-if="!loanactives" class="text-center">
                <div class="spinner-border spinner-border-sm"></div>
            </div>
        </div>
    </div>
</template>