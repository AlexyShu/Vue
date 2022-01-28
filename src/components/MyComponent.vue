<template>
    <div class="root">
        <label>
            Введите e-mail
            <input 
                type="email" 
                v-bind:value="email" 
                v-on:input="emailInput($event.target.value)"
            /> 
            {{email}}
            <!-- v-bind краткая запись :value="email" -->
            <!-- v-on отслеживает событие, типа addEventListener -->
            <!-- v-on краткая запись @input="emailInput" -->
        </label>
        <label>
            Введите пароль
            <input 
                type="password" 
                :value="password"
                @input="passwordInput($event.target.value)"
             />
             {{password}}
        </label>
        <p>Выберите кол-во продуктов:</p>
        <button
            type="button"
            @click="decreaseCount"
        >
            -
        </button>
        <input
            type="number"
            :value="count"
            :min="minCount"
            :max="maxCount"
        >
        <button
            type="button"
            @click="increaseCount"
        >
            +
        </button>
    </div>
</template>

<script>
export default {
    name: "MyComponent",
    data() {
        return {
            email: "example@mail.ru",
            password: "1234",
            count: 1,
            maxCount: 10,
            minCount: 1
        }
    },
    methods: {
        emailInput(value) {
            this.email = value;
        },
        passwordInput(value) {
            this.password = value;
        },
        decreaseCount() {
            if(this.count > this.minCount) { // если значение больше 1 , прибавляем
                this.count-- 
            }
        },
        increaseCount() {
            if(this.count < this.maxCount) { // если значение меньше 10 уменьшаем
                this.count++
            }
        }
    }
}
</script>
