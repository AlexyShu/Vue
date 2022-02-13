<template>
    <select v-model="selected">
        <option disabled value="">Выберите один из вариантов</option>
        <option>А</option>
        <option>Б</option>
        <option>В</option>
    </select>
</template>

<script>

export default {
  name: "Select", 
  data () {
    return {
        selected: ''
    }
  }
}
</script>