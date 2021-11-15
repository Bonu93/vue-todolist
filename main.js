
const app = new Vue({
    
    el: '#app',
    
    data: {

        todos: [
            {
                text: 'Cambiare le lampadine',
                completed: false,
            },

            {
                text: 'Fare la spesa',
                completed: true,
            },

            {
                text: 'Lavare la macchina',
                completed: true,
            },

            {
                text: 'Pagare le bollette',
                completed: true,
            },
        ],

    },

    methods: {

    },
})