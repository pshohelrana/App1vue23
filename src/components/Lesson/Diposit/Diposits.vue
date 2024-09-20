<script setup>

import { ref } from 'vue';
import { Settings } from '@/config/Setting.js'

import Http from '@/helpers/http.js'
import { html } from '@/helpers/html.js'

//-----vars-----
const diposits = ref(null);

//-----get-----
const result = Http.get(`${Settings.baseURL}/diposits`);
result.then(function (res) {
    console.log(res.data);
    diposits.value = res.data;
});
//console.log()

//-----delete----
function Delete(id) {

    let res = Http.delete(`${Settings.baseURL}/diposits/${id}`);
    console.log(res);

}

//----Find----------
function Find(id) {
    let result = Http.get(`${Settings.baseURL}/diposits/${id}`)
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
                <RouterLink class="btn btn-info" to="/diposits/create">New Diposit</RouterLink>
            </div>
        </h5>


        <div class="card-body">

            <div v-if="diposits">

                <table class="table table-striped">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Principle</th>
                        <th>Paid</th>
                        <th>Due</th>
                        <th>Loanactive</th>

                        <th>Updated At</th>
                        <th>Created At</th>

                        <th style="text-align: right;">Action</th>

                    </tr>
                    <tr v-for="diposit in diposits" :key="diposit.id">
                        <td>{{ diposit.id }}</td>
                        <td>{{ diposit.name }}</td>
                        <td>{{ diposit.mobile }}</td>
                        <td>{{ diposit.address }}</td>
                        <td>{{ diposit.principle }}</td>
                        <td>{{ diposit.paid }}</td>
                        <td>{{ diposit.due }}</td>
                        <td>{{ diposit.loanactive }}</td>

                        <td>{{ diposit.updated_at }}</td>
                        <td>{{ diposit.created_at }}</td>

                        <td style="text-align: right;">
                            <div class="btn-group">
                                <RouterLink :to="'/diposits/edit/' + diposit.id" class="btn btn-primary">Edit
                                </RouterLink>
                                <RouterLink :to="'/diposits/details/' + diposit.id" class="btn btn-success">View
                                </RouterLink>
                                <RouterLink :to="'/diposits/delete/' + diposit.id" class="btn btn-danger">Delete
                                </RouterLink>
                            </div>

                        </td>
                    </tr>
                </table>
            </div>
            <div v-if="!diposits" class="text-center">
                <div class="spinner-border spinner-border-sm"></div>
            </div>
        </div>
    </div>
</template>