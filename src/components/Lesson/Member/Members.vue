<script setup>

import { ref } from 'vue';
import { Settings } from '@/config/Setting.js'

import Http from '@/helpers/http.js'
import { html } from '@/helpers/html.js'

//-----vars-----
const members = ref(null);

//-----get-----
const result = Http.get(`${Settings.baseURL}/members`);
result.then(function (res) {
    //console.log(res.data);
    members.value = res.members;
});
//console.log()

//-----delete----
function Delete(id) {

    let res = Http.delete(`${Settings.baseURL}/members/${id}`);
    console.log(res);

}

//----Find----------
function Find(id) {
    let result = Http.get(`${Settings.baseURL}/members/${id}`)
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
                <RouterLink class="btn btn-info" to="/members/create">New Member</RouterLink>
            </div>
        </h5>


        <div class="card-body">

            <div v-if="members">

                <table class="table table-striped">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>LastName</th>
                        <th>Address</th>
                        <th>NiD</th>
                        <th>Photo</th>
                        <th>Deposit</th>
                        <th>Withdraw</th>
                        <th>Total Amount</th>
                        <th>Updated At</th>
                        <th>Created At</th>

                        <th style="text-align: right;">Action</th>

                    </tr>
                    <tr v-for="member in members" :key="member.id">
                        <td>{{ member.id }}</td>
                        <td>{{ member.name }}</td>
                        <td>{{ member.lastname }}</td>
                        <td>{{ member.address }}</td>
                        <td>{{ member.nid }}</td>
                        <td>{{ member.photo }}</td>
                        <td>{{ member.deposit }}</td>
                        <td>{{ member.withdraw }}</td>
                        <td>{{ member.total_amount }}</td>
                        <td>{{ member.updated_at }}</td>
                        <td>{{ member.created_at }}</td>

                        <td style="text-align: right;">
                            <div class="btn-group">
                                <RouterLink :to="'/members/edit/' + member.id" class="btn btn-primary">Edit
                                </RouterLink>
                                <RouterLink :to="'/members/details/' + member.id" class="btn btn-success">View
                                </RouterLink>
                                <RouterLink :to="'/members/delete/' + member.id" class="btn btn-danger">Delete
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