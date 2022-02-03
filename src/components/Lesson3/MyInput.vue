<template>
  <!-- <input type="text" class="search" @input="$emit('change', $event.target.value)" > -->
   <input type="text" class="search" v-model="searchText" >
   <button @click="$emit('search', searchText)">
        Найти
    </button>
</template>

<script>
export default {
    name: 'MyInput',
    // model: {
    //     prop: 'value',
    //     event: 'change'
    //   }
    // }
    data() {
        return {
            searchText: ''
        }
    }
}
</script>

<style scoped>
    input {
        height: 25px;
        margin-left: 40px;
    }
    button {
        background-color: rgb(221, 56, 56);
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 8px 14px;
        display: block;
        cursor: pointer;
        margin-left: 10px;
    }
</style>

