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
// 保存todo
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