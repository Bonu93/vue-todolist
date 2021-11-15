
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
                completed: false,
            },

            {
                text: 'Pagare le bollette',
                completed: true,
            },
        ],

    },

    methods: {
        toggleComplete(index) {
            this.todos[index].completed = !this.todos[index].completed;
        }
    },
})