<template>
  <div class="autocomplete">
    <input class="autocomplete-input bg-slate-200" placeholder="Search" type="text" v-on:input="searchText = $event.target.value">
  </div>
</template>

<script>
export default {
    name: "InputSearch",
    data() {
        return {
            searchText: "",
            names: ["Данил", "Василий", "Дмитрий", "Григорий", "Максим"]
        }
    },
    computed: {
        getFilteredNames() {
            return this.names.filter(name => name.toLowerCase().includes(this.searchText.toLowerCase()))
        }
    }
}
</script>

<style scoped>
    .autocomplete {
        max-width: 400px;
        margin: 0 auto;
    }
    .autocomplete-input {
        border: 1px solid #eee;
        border-radius: 8px;
        width: 100%;
        padding: 8px 12px 8px 48px;
        box-sizing: border-box;
        font-size: 16px;
        line-height: 1.5;
        background-color: #eee;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxwYXRoIGQ9Ik0yMSAyMWwtNC00Ii8+PC9zdmc+);
        background-repeat: no-repeat;
        background-position: 12px;
}



</style>
