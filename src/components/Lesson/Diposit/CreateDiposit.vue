<script setup>
import { ref } from 'vue';
import { Settings } from '@/config/Setting.js'
import Http from '@/helpers/http.js'

//-----vars-----
const diposits = ref(null);

//----form variables----
const name = ref('');
const mobile = ref('');
const address = ref('');
const principle = ref(0);
const paid = ref('');
const due = ref(0);
const loanactive_id = ref(1);

//-----get-----
const result = Http.get(`${Settings.baseURL}/diposits`);
result.then(function (res) {
    diposits.value = res.data;
});
const onSubmit = () => {
    let formData = new FormData();
    formData.append("name", name.value);
    formData.append("mobile", mobile.value);
    formData.append("address", address.value);
    formData.append("principle", principle.value);
    formData.append("paid", paid.value);
    formData.append("due", due.value);
    formData.append("loanactive_id", loanactive_id.value);

    const result_save = Http.post(`${Settings.baseURL}/diposits`, formData);
    result_save.then(function (res) {
        console.log(res);
    })

};
//testing function
const handleFileupload = async () => {
    //debugger;
    console.log(file.value.files[0])
} 
</script>

<template>
    <div>
        <RouterLink class="btn btn-secondary" to="/diposits">Manage Page</RouterLink>

    </div>
    <h3>Create Deposit</h3>
    <div class="container">

        <div class="card">
            <div class="card-header">Create Deposit</div>
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
                        <label class="col-3 form-label">paid</label>
                        <div class="col-9">
                            <input v-model="paid" type="text" class="form-control" name="paid" />
                        </div>
                    </div>



                    <div class="row mb-2">
                        <label class="col-3 form-label">Due</label>
                        <div class="col-9">
                            <input v-model="due" type="text" class="form-control" name="due" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <label class="col-3 form-label">Loanactive_id</label>
                        <div class="col-9">
                            <input v-model="loanactive_id" type="text" class="form-control" name="loanactive_id" />
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