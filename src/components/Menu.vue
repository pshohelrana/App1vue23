<script setup>
defineProps(["name", "title", "icon"]);
</script>
<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" style="background-color: #fff;" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#' + name" aria-expanded="false" :aria-controls="name">
                <i :class="icon"></i>
                &nbsp;&nbsp;
                <strong>{{ title }}</strong>
            </button>

        </h2>
        <div :id="name" class="accordion-collapse collapse" :aria-labelledby="'heading' + name"
            data-bs-parent="#accordionExample">
            <div class="accordion-body p-0">
                <div class="list-group">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>