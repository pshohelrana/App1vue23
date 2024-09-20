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
const policy = ref('');
const lastname = ref('');
const loanamount = ref(0);
const file = ref('');

const interest_rate = ref(0);
const net_amount = ref(0);
const member_id = ref(0);
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
    formData.append("policy", policy.value);
    formData.append("lastname", lastname.value);
    formData.append("loanamount", loanamount.value);
    formData.append('photo', file.value.files[0]);
    formData.append("interest_rate", interest_rate.value);
    formData.append("net_amount", net_amount.value);
    formData.append("member_id", member_id.value);

    formData.append("updated_at", updated_at.value);
    formData.append("created_at", created_at.value);



    const result_save = Http.post(`${Settings.baseURL}/withdraws`, formData);
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
        <RouterLink class="btn btn-secondary" to="/withdraws">Back</RouterLink>
    </div>
    <h3>Create Withdraw</h3>
    <div class="container">

        <div class="card">
            <div class="card-header">Create Withdraw</div>
            <div class="card-body">

                <form @submit.prevent="onSubmit">

                    <div class="row mb-2">
                        <label class="col-3 form-label">Name</label>
                        <div class="col-9">
                            <input v-model="name" type="text" class="form-control" name="name" />
                        </div>
                    </div>

                    <div class="row mb-2">
                        <label class="col-3 form-label">Policy</label>
                        <div class="col-9">
                            <input v-model="policy" type="text" class="form-control" name="policy" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Last Name</label>
                        <div class="col-9">
                            <input v-model="last_name" type="text" class="form-control" name="last_name" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Loan Amount</label>
                        <div class="col-9">
                            <input v-model="loan_amount" type="text" class="form-control" name="loan_amount" />
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
                        <label class="col-3 form-label">Interest Rate</label>
                        <div class="col-9">
                            <input v-model="interest_rate" type="text" class="form-control" name="interest_rate" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Net_Amount</label>
                        <div class="col-9">
                            <input v-model="net_amount" type="text" class="form-control" name="net_amount" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Member_id</label>
                        <div class="col-9">
                            <input v-model="Member_id" type="text" class="form-control" name="member_id" />
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