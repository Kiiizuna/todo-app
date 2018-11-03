// todo API
var createTodo = function(task) {
	t = {
		task: task,
		done: false,
	}
	return t 
}
// 保存todoList 到localStorage 中
var saveTodos = function(todoList) {
	localStorage.todos = JSON.stringify(todoList)
}
// 保存增加的单个 todo
var saveTodo = function(todo) {
	// var todoStr = localStorage.todos
	// if (todoStr == undefined) {
	// 	todoStr = '[]'
	// } 
	// var todoList = JSON.parse(todoStr)
	var todoList = loadTodos()
	todoList.push(todo)
	saveTodos(todoList)				
}

var loadTodos = function() {
	var todoStr = localStorage.todos
	if (todoStr == undefined) {
		todoStr = '[]'
	} 
	var todoList = JSON.parse(todoStr)
	return todoList
}


var saveEditTodos = function() {
	var editContainer = e('.todo-edit')
	var contents = editContainer.querySelectorAll('.todo-content')
	var todos = []
	for (var i = 0; i < contents.length; i++) {
		var c = contents[i]
		var done = c.parentElement.classList.contains('done')
		// 变量 done 的值为 true 或者 false
		var todo = {
			'done': done,
			'task': c.innerHTML,
		}
		todos.push(todo)
	}
	saveTodos(todos)
}