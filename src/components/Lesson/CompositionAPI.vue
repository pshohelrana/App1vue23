<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)
const word = ref('Word')

// functions that mutate state and trigger updates
function increment() {
    count.value++
}

function showLine() {
    word.value = 'Updated Line'
}

// lifecycle hooks
onMounted(() => {
    //showLine();
    console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
    <button @click="increment">Count is: {{ count }}</button>
    <button @click="showLine">Show Me</button>
    <p>
        {{ word }}
    </p>

</template>