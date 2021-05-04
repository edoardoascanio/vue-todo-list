const app = new Vue({
	el: "#main",
	data: {
		newTodoTitle: "",
		query: "",
		todolist: [
			{
				title: "Fare la spesa",
				done: false
			},
			{
				title: "Pagare l'affitto",
				done: false
			},
			{
				title: "Chiamare elettricista",
				done: true
			}
		]
	},
	methods: {
		addTodo() {
			if (!this.newTodoTitle) {
				alert('Inserisci una stringa non vuota')
				return;
			}

			this.todolist.push({
				title: this.newTodoTitle, 
				done: false
			});
		},
		toggleTodo(todo) {
			/*if (todo.done) {
				todo.done = false;
			} else {
				todo.done = true;
			}*/

			todo.done = !todo.done;
		}
	},
	computed: {
		searchTodos: function() {
			return this.todolist.filter(element => element.title.includes(this.query))
								.map((element) => {
							   		if (this.query == "")
							   			return element;

								   	return {
										done: element.done,
										title: element.title.replace(this.query, "(" + this.query + ")")
								   	}
							   });
		}
	}
})
