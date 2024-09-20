<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router'
import { Settings } from '@/config/Setting.js'
import Http from '@/helpers/http.js'
const route = useRoute()
const product = ref(null)

onMounted(async () => {
    let result = Http.get(`${Settings.baseURL}/products/${route.params.id}`);
    result.then(function (res) {
        console.log(res);
        product.value = res;
    });

});


</script>

<template>
    <div>
        <RouterLink class="btn btn-secondary" to="/products">Back</RouterLink>
    </div>
    <div v-if="product">
        <h1>Product Details</h1>
        <table class="table">
            <tr>
                <th>Name</th>
                <td>{{ product.name }}</td>
            </tr>
            <tr>
                <th>Price</th>
                <td>{{ product.offer_price }}</td>
            </tr>
            <tr>
                <th>Category</th>
                <td>{{ product.category }}</td>
            </tr>
            <tr>
                <th>Base Unit</th>
                <td>{{ product.uom }}</td>
            </tr>

        </table>
    </div>
    <div v-if="!product" class="text-center">
        <div class="spinner-border spinner-border-sm"></div>
    </div>

</template>