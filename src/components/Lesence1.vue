<template>
    <div class="user-card">
        <h1>Уроки по бизнесу.</h1>
        <h2>{{ getAutherName }}</h2>
        <p>{{`Участников: ${users.length}`}}</p>
        <ul>
            <li 
                v-for="(user, index) in users" 
                :key="index"
            >
                {{ `${index + 1} ${getUserName(user)}` }} 
            </li>
        </ul>
        <button 
            type="button"
            @click="currentPage--"
        >
            Пред.
        </button>
         <button 
            v-for="index in pages" 
            :key="index"
            type="button"
             @click="currentPage = index"
        >
        {{ index }}
        </button>
        <button 
            type="button"
            @click="currentPage++"
        >
            След.
        </button>
        <p>Страница {{ currentPage }} из {{ pages }}</p>
        <!-- v-for можно пройтись не только по массиву но и по объекту -->
        <p>{{`разбор объекта`}}</p>
        <div 
            v-for="(value, key, index) in users[0]" 
            :key="index"
        >
        {{ `${index} ${key} ${value}` }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Lesence1",
    data() {
        return {
            firstName: "Иван",
            secondName: "Иванович",
            lastName: "Иванов",
            users: [
                {
                    firstName: "Пётр",
                    secondName: "Петрович",
                    lastName: "Петров",
                }, {
                    firstName: "Семён",
                    secondName: "Семёнович",
                    lastName: "Семёнов",
                }, {
                    firstName: "Генадий",
                    secondName: "Генадьевич",
                    lastName: "Генадев",
                }
            ],
            pages: 3,
            currentPage: 1
        }
    },
    computed: {
        getAutherName() {
            return `${this.lastName} ${this.firstName} ${this.secondName}`.toUpperCase();
        }
    },
    methods: {
        getUserName(user) {
            return `${user.lastName} ${user.firstName} ${user.secondName}`
        },
        loadUsers(page) {
            console.log(`Загрузка пользователей, страница - ${page}`)
        }
    },
    // функции которые следят за изменением свойств
    // должны называться точно так же как и свойства
    watch: {
        // currentPage(newValue, oldValue) {
        //     console.log("newValue", newValue)
        //     console.log("oldValue", oldValue)
        // }
        currentPage(page) {
            // передаю новое значение страницы
             this.loadUsers(page); 
        }
    }
}
</script>

<style scoped>
    ul {
         list-style-type: none;
         margin: 0;
         padding: 0;
    }
</style>
