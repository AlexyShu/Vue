<template>
  <div class="conatiner">
    <input-seach />
    <input-date />
    <Select />
    <input-checkbox />
   
  </div>
</template>

<script>
import InputCheckbox from './InputCheckbox.vue';
import InputDate from './InputDate.vue';
import Select from './Select.vue';
import InputSeach from './InputSeach.vue';

export default {
    name: "Inputs",
    components: {InputDate, InputCheckbox, Select, InputSeach},
    data() {
        return {
             
        }
    },
}
</script>