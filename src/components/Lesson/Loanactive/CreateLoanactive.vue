<script setup>
import { ref } from 'vue';
import { Settings } from '@/config/Setting.js'
import Http from '@/helpers/http.js'

//-----api variables-----
const loansystems = ref(null);
const loanapplicants = ref([]);
// const uoms = ref([]);

//----form variables-------
const name = ref('');
const mobile = ref('');
const address = ref('');
const loansystem_id = ref(0);
const loanapplicant_id = ref('');
const principle = ref('');
const file = ref('');
const interest_rate = ref(0);
const emi = ref(0);
const total_tk = ref(0);
const remark = ref('');

const updated_at = ref('');
const created_at = ref('');




//-----get-----
const loansystem_r = Http.get(`${Settings.baseURL}/loansystems`);
loansystem_r.then(function (res) {
    console.log(res);
    loansystems.value = res.loansystems;
});


const loanapplicant_r = Http.get(`${Settings.baseURL}/loanapplicants`);
loanapplicant_r.then(function (res) {
    loanapplicants.value = res.loanapplicants;
});

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
    formData.append("mobile", mobile.value);
    formData.append("address", address.value);
    formData.append("loansystem_id", loansystem_id.value);
    formData.append("loanapplicant_id", loanapplicant_id.value);
    formData.append("principle", principle.value);
    formData.append("interest_rate", interest_rate.value);
    formData.append("emi", emi.value);
    formData.append("total_tk", total_tk.value);
    formData.append("remark", remark.value);

    formData.append('photo', file.value.files[0]);

    formData.append("updated_at", updated_at.value);
    formData.append("created_at", created_at.value);



    const result_save = Http.post(`${Settings.baseURL}/loanactives`, formData);
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
        <RouterLink class="btn btn-secondary" to="/loanactives">Back</RouterLink>
    </div>
    <h3>Create Loanactive</h3>
    <div class="container">

        <div class="card">
            <div class="card-header">Create Loanactive</div>
            <div class="card-body">

                <form @submit.prevent="onSubmit">

                    <div class="row mb-2">
                        <label class="col-3 form-label">Name</label>
                        <div class="col-9">
                            <input v-model="name" type="text" class="form-control" name="name" />
                        </div>
                    </div>

                    <div class="row mb-2">
                        <label class="col-3 form-label">Mobile</label>
                        <div class="col-9">
                            <input v-model="mobile" type="text" class="form-control" name="mobile" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Address</label>
                        <div class="col-9">
                            <input v-model="address" type="text" class="form-control" name="address" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Loansystm</label>
                        <div class="col-9">
                            <select name="loansystem_id" class="form-control" v-model="loansystem_id">
                                <option>Select Loansystem</option>
                                <option v-for="loansystem in loansystems" :key="loansystem.id" :value="loansystem.id">
                                    {{ loansystem.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Loanapplicant</label>
                        <div class="col-9">
                            <select name="loanapplicant_id" class="form-control" v-model="loanapplicant_id">
                                <option>Select Loanapplicant</option>
                                <option v-for="loanapplicant in loanapplicants" :key="loanapplicant.id"
                                    :value="loanapplicant.id">
                                    {{ loanapplicant.name }}
                                </option>
                            </select>
                        </div>
                    </div>



                    <div class="row mb-2">
                        <label class="col-3 form-label">principle</label>
                        <div class="col-9">
                            <input v-model="principle" type="text" class="form-control" name="principle" />
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
                        <label class="col-3 form-label">principle</label>
                        <div class="col-9">
                            <input v-model="principle" type="text" class="form-control" name="principle" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Interest Rate</label>
                        <div class="col-9">
                            <input v-model="interest_rate" type="text" class="form-control" name="interest_rate" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">EMI</label>
                        <div class="col-9">
                            <input v-model="emi" type="text" class="form-control" name="emi" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Total_tk</label>
                        <div class="col-9">
                            <input v-model="total_tk" type="text" class="form-control" name="total_tk" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Remark</label>
                        <div class="col-9">
                            <input v-model="remark" type="text" class="form-control" name="remark" />
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