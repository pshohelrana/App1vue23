<script setup>
import { ref } from 'vue';
import { Settings } from '@/config/Setting.js'
import Http from '@/helpers/http.js'

//-----vars-----
const categories = ref(null);

//-----get-----
const result = Http.get(`${Settings.baseURL}/products`);
result.then(function (res) {
    categories.value = res.data;
});

</script>

<template>
    <h3>Create Product</h3>
    <div class="container">

        <div class="card">
            <div class="card-header">Create Product</div>
            <div class="card-body">

                <div class="row mb-2">
                    <label class="col-3 form-label">Category</label>
                    <div class="col-9">
                        <select name="category_id" class="form-control">
                            <option>Select Category</option>
                        </select>
                    </div>
                </div>

                <div class="row mb-2">
                    <label class="col-3 form-label">Brand</label>
                    <div class="col-9">
                        <select name="brand_id" class="form-control">
                            <option>Select Brand</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-2">
                    <label class="col-3 form-label">SKU</label>
                    <div class="col-9">
                        <input type="text" class="form-control" name="sku" />
                    </div>
                </div>
                <div class="row mb-2">
                    <label class="col-3 form-label">Name</label>
                    <div class="col-9">
                        <input type="text" class="form-control" name="name" />
                    </div>
                </div>

                <div class="row mb-2">
                    <label class="col-3 form-label">Offer Price</label>
                    <div class="col-9">
                        <input type="text" class="form-control" name="price" />
                    </div>
                </div>

                <div class="row mb-2">
                    <label class="col-3 form-label">Uom</label>
                    <div class="col-9">
                        <select name="uom_id" class="form-control">
                            <option>Select Uom</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-2">
                    <label class="col-3 form-label">Photo</label>
                    <div class="col-9">
                        <input type="file" class="form-control" name="photo" />
                    </div>
                </div>
                <div class="row mb-2">
                    <label class="col-3 form-label">Description</label>
                    <div class="col-9">
                        <textarea class="form-control" name="description"></textarea>
                    </div>
                </div>
                <div class="row mb-2">

                    <div class="offset-3">
                        <input type="submit" class="btn btn-primary" name="submit" value="Save" />
                    </div>
                </div>

            </div>

        </div>


    </div>
</template>