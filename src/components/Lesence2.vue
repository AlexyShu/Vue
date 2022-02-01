<template>
    <div class="container">
        <div class="flex">
            <div class="img-wrapper">
                <img 
                    v-if="isCatVisible" 
                    :class="imgFilters"
                    :style="imgStyles"
                    src="../assets/cat.jpg"
                >
                <p v-else>Кот скоро вернётся :)</p>
                <!-- <img v-show="isCatVisible" src="../assets/cat.jpg"> -->
            </div>
            <div class="controls">
                <h1>Шаверма-кот</h1>
                <h2>Фильтры</h2>
                <div class="btn-group">
                    <button
                        type="button"
                        :class="imgFilters.sepia ? 'active' : ''" 
                        @click="imgFilters.sepia = !imgFilters.sepia"
                    >
                        Сепия
                    </button>
                    <button
                        type="button"
                        :class="imgFilters.border ? 'active' : ''"
                        @click="imgFilters.border = !imgFilters.border"
                    >
                        Рамка
                    </button>
                    <button
                        type="button"
                        :class="imgFilters.small ? 'active' : ''"
                        @click="imgFilters.small = !imgFilters.small"
                    >
                        Уменьшение
                    </button>
                </div>

                <h2>Размер</h2>
                <div class="btn-group">
                    <label>
                        Ширина: {{ imgSizes.currentWidth }}
                        <input
                            type="range"
                            :value="imgSizes.currentWidth"
                            @input="imgSizes.currentWidth = $event.target.value"
                            :min="imgSizes.minWidth"
                            :max="imgSizes.maxWidth"
                        >
                    </label>
                    <label>
                        Высота: {{ imgSizes.currentHeight }}
                        <input
                            type="range"
                            :value="imgSizes.currentHeight"
                            @input="imgSizes.currentHeight = $event.target.value"
                            :min="imgSizes.minHeight"
                            :max="imgSizes.maxHeight"
                        >
                    </label>
                </div>

                <button @click="isCatVisible = !isCatVisible">
                Показать / спрятать
                </button>
            </div>
        </div>
  </div>

</template>

<script>
export default {
    name: "Lesence2",
    data() {
        return {
            isCatVisible: true,
            imgFilters: {
                sepia: false,
                border: false,
                small: false
            },
             imgSizes: {
                minWidth: 100,
                maxWidth: 680,
                minHeight: 200,
                maxHeight: 480,
                currentWidth: 680,
                currentHeight: 480,
            }
        }
    },
    computed: {
        imgStyles() {
            return {
                width: `${this.imgSizes.currentWidth}px`,
                height: `${this.imgSizes.currentHeight}px`
            }
        }
    }
}
</script>

<style scoped>
    .container {
        margin-top: 40px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
    .flex {
        display: flex;
    }
    button {
        font-family: 'Roboto', sans-serif;
        color: #474747;
        font-weight: 500;
        background-color: transparent;
        border: 1px solid #333333;
        border-radius: 2px;
        padding: 6px 12px;
        cursor: pointer;
        transition: 0.1s ease;
        margin-right: 10px;
    }
    button:hover,
    button:focus {
        outline: none;
        background-color: #e6e6e6;
    }
    .active {
      background-color: #dbdbdb;
    }
    .img-wrapper {
        margin-right: 20px;
    }
    h2 {
        margin-bottom: 10px;
    }
    .btn-group {
        margin-bottom: 20px;
    }
    img {
        transition: 0.2s ease;
    }
    .sepia {
      filter: sepia(100%);
    }
    .border {
      border: 5px dashed #464646
    }
    .small {
      width: 400px;
    }

</style>
