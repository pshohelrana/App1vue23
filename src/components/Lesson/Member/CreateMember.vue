<script setup>
import { ref } from 'vue';
import { Settings } from '@/config/Setting.js'
import Http from '@/helpers/http.js'

//-----api variables-----
// const categories = ref(null);
// const brands = ref([]);
// const uoms = ref([]);

//----form variables-------
const name = ref('');
const lastname = ref('');
const address = ref('');
const nid = ref(0);
const file = ref('');

const deposit = ref(0);
const withdraw = ref(0);
const total_amount = ref(0);
const updated_at = ref();
const created_at = ref();



//-----get-----
// const result = Http.get(`${Settings.baseURL}/productcategories`);
// result.then(function (res) {
//     categories.value = res.categories;
// });


// const brand_r = Http.get(`${Settings.baseURL}/productbrands`);
// brand_r.then(function (res) {
//     brands.value = res.brands;
// });

// const uom_r = Http.get(`${Settings.baseURL}/uoms`);
// uom_r.then(function (res) {
//     uoms.value = res.uoms;
// });

const onSubmit = () => {

    //console.log(name.value);
    //console.log(brand_id.value);
    //console.log(file.value.files[0]);

    let formData = new FormData();
    formData.append("name", name.value);
    formData.append("lastname", lastname.value);
    formData.append("address", address.value);
    formData.append("nid", nid.value);
    formData.append('photo', file.value.files[0]);
    formData.append("deposit", deposit.value);
    formData.append("withdraw", withdraw.value);
    formData.append("total_amount", total_amount.value);

    formData.append("updated_at", updated_at.value);
    formData.append("created_at", created_at.value);



    const result_save = Http.post(`${Settings.baseURL}/members`, formData);
    result_save.then(function (res) {
        console.log(res);
    });


};

// testing function
const handleFileUpload = async () => {
    // debugger;
    console.log(file.value.files[0])
    // Upload to server
}

</script>

<template>
    <div>
        <RouterLink class="btn btn-secondary" to="/members">Back</RouterLink>
    </div>
    <h3>Create Member</h3>
    <div class="container">

        <div class="card">
            <div class="card-header">Create Member</div>
            <div class="card-body">

                <form @submit.prevent="onSubmit">

                    <div class="row mb-2">
                        <label class="col-3 form-label">Name</label>
                        <div class="col-9">
                            <input v-model="name" type="text" class="form-control" name="name" />
                        </div>
                    </div>

                    <div class="row mb-2">
                        <label class="col-3 form-label">Last Name</label>
                        <div class="col-9">
                            <input v-model="lastname" type="text" class="form-control" name="lastname" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Address</label>
                        <div class="col-9">
                            <input v-model="address" type="text" class="form-control" name="address" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Nid</label>
                        <div class="col-9">
                            <input v-model="nid" type="text" class="form-control" name="nid" />
                        </div>
                    </div>


                    <div class="row mb-2">
                        <label class="col-3 form-label">Photo</label>
                        <div class="col-9">
                            <input type="file" ref="file" v-on:change="handleFileUpload()" class="form-control"
                                name="file" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Deposit</label>
                        <div class="col-9">
                            <input v-model="deposit" type="text" class="form-control" name="diposit" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Withdraw</label>
                        <div class="col-9">
                            <input v-model="withdraw" type="text" class="form-control" name="withdraw" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Total Amount</label>
                        <div class="col-9">
                            <input v-model="total_amount" type="text" class="form-control" name="total_amount" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Updated At</label>
                        <div class="col-9">
                            <input type="date" class="form-control" name="updated_at" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Created At</label>
                        <div class="col-9">
                            <input type="date" class="form-control" name="created_at" />
                        </div>
                    </div>
                    <div class="row mb-2">

                        <div class="offset-3">
                            <input type="submit" class="btn btn-primary" name="submit" value="Save" />
                        </div>
                    </div>
                </form>
            </div>

        </div>


    </div>
</template>