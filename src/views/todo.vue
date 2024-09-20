<script setup>
  import {ref} from 'vue'

  let i=0;
  const item=ref('');
  const items=ref([
    {id:i++,task:'Check Email'},
    {id:i++,task:'Go for work'}
  ]);


  function addTask(){
    items.value.push({id:i++,task:item.value})
  }

  function deleteTask(item){
     items.value=items.value.filter((t)=>t.id!=item.id)
  } 

</script>

<template>
  
  <form @submit.prevent="addTask">
    <input v-model="item" />
    <button>Add</button>
 </form>
  
  <ul class="task">
    <li v-for="item in items" :key="item.id">
         <div>
            {{ item.task }}
         </div>        
          <button @click="deleteTask(item)">X</button>
    </li>
  </ul>
</template>
<style>
.task{
    margin: 0;
    padding:0;
    list-style: none;
    width: 200px;
}
.task li{
    padding: 10px;
   background-color: lightgray;
   margin-bottom: 4px;
   font-weight:800;
   display: flex;
   justify-content: space-between;  
}

</style>