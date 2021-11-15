
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

        newToDo: '',

    },

    methods: {
        toggleComplete(index) {
            this.todos[index].completed = !this.todos[index].completed;
        },

        deleteTodo(index) {
            this.todos.splice(index, 1);
        },

        addNewToDo() {
            this.todos.push({
                text: this.newToDo,
                completed: false
            });

            this.newToDo = '';

            this.$refs.toDoInput.focus();
        },
    },
})