<script>
export default {
    // reactive state
    data() {
        return {
            count: 0,
            word: "Hello"
        }
    },

    // functions that mutate state and trigger updates
    methods: {
        increment() {
            this.count++
        },
        showLine() {
            this.word = "Updated Line"
        }
    },

    // lifecycle hooks
    mounted() {
        //this.showLine()
        // console.log(`The initial count is ${this.count}.`)

    }
}
</script>

<template>
    <button @click="increment">Count is: {{ count }} </button>
    <button @click="showLine">Click</button>
    {{ word }}
</template>