<script setup>

import { ref } from 'vue';
import { Settings } from '@/config/Setting.js'

import Http from '@/helpers/http.js'
import { html } from '@/helpers/html.js'

//-----vars-----
const products = ref(null);

//-----get-----
const result = Http.get(`${Settings.baseURL}/products`);
result.then(function (res) {
    //console.log(res.data);
    products.value = res.data;
});
//console.log()

//-----delete----
function Delete(id) {

    let res = Http.delete(`${Settings.baseURL}/products/${id}`);
    console.log(res);

}

//----Find----------
function Find(id) {
    let result = Http.get(`${Settings.baseURL}/products/${id}`)
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
                <RouterLink class="btn btn-info" to="/products/create">New Product</RouterLink>
            </div>
        </h5>


        <div class="card-body">

            <div v-if="products">

                <table class="table table-striped">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th style="text-align: right;">Action</th>

                    </tr>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.offer_price }}</td>
                        <td style="text-align: right;">
                            <div class="btn-group">
                                <RouterLink :to="'/products/edit/' + product.id" class="btn btn-primary">Edit
                                </RouterLink>
                                <RouterLink :to="'/products/details/' + product.id" class="btn btn-success">View
                                </RouterLink>
                                <RouterLink :to="'/products/delete/' + product.id" class="btn btn-danger">Delete
                                </RouterLink>
                            </div>

                        </td>
                    </tr>
                </table>
            </div>
            <div v-if="!products" class="text-center">
                <div class="spinner-border spinner-border-sm"></div>
            </div>
        </div>
    </div>
</template>