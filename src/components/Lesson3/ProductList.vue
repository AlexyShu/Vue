<template>
  <div class="product-list">
    <h1>Письменные столы</h1>
    <div class="top-information">
      <!-- <input :value="searchText" @change="searchText = $event.target.value"  /> -->
      <!-- <input v-model="searchText"  /> -->
       <!-- <MyInput v-model="searchText" /> -->
       <MyInput @search="searchProducts" />
    </div>
    
    <ul class="list-default flex">
      <li
        v-for="(product, index) in products"
        :key="index"
      >
        <ProductCard 
            :title="product.title"
            :price="product.price"
            :imgUrl="product.imgUrl"
            :count="product.count"
            @addToBasket="addToBasket(index)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
import MyInput from './MyInput'

export default {
  name: 'ProductList',
  components: {ProductCard, MyInput},
  data() {
    return {
      // searchText: '',
      products: [
        {
          title: 'Стол Jim',
          price: 19999,
          imgUrl: 'https://hoff.ru/upload/iblock/8c9/8c989500ee8639b9e3aa267b1888b4af.jpg',
          count: 30
        },
        {
          title: 'Стол Monako',
          price: 17199,
          imgUrl: 'https://hoff.ru/upload/iblock/af2/af2d37161f217d4f489373be7da4a7a0.jpg',
          count: 20
        },
        {
          title: 'Стол с двумя ящиками Кварт MD 768',
          price: 10999,
        }
      ]
    }
  },
  methods: {
    addToBasket(index) {
      console.log(index)
    },
    searchProducts(searchText) {
      console.log('Загрузить товары: ' + searchText)
    }
  }
}
</script>

<style scoped>
    ul {
         list-style-type: none;
         margin: 0;
         padding: 0;
         display: flex;
    }
    li {
        margin-right: 20px;
    }
    .top-information {
        display: flex;
        align-items: flex-start;
        margin: 20px 0;
    }
    h1 {
        margin-bottom: 0;
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
