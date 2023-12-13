
const { createApp } = Vue 

createApp({
    data() {
    return {
        todo_list: [
            {
                text: 'Fare la spesa',
                done: true,
            },
            {
                text: 'Buttare la spazzatura',
                done: false,
            },
            {
                text: 'Fare benzina alla macchina',
                done: true,
            },
            {
                text: 'Ritirare i panni',
                done: false,
            },
            {
                text: 'Prendere l\'acqua',
                done: true,
            },
        ]
    }
},
methods: {
    
},
}).mount('#app')