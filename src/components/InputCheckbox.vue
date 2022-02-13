<template>
    <div > 
        <input type="checkbox" id="checkbox" v-model="checked">
        <label class="decoration-slate-200" for="checkbox">{{ checked }}</label>
    </div>
</template>

<script>

export default {
  name: "InputCheckbox", 
  data () {
    return {
        checked: true
    }
  }
}
</script>