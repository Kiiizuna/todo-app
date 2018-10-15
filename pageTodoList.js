var templateTodo = function(todo) {
	var task = todo.task
	var t = `
		<div>
			${task}
		</div>
	`
	return t 
}

var insertTodos = function(todoList) {
	var todoWraper = e('.todo-wrapper')
	todoWraper.innerHTML = '' 	
	for (var i = 0; i < todoList.length; i++) {
		var todo = todoList[i]
		var t = templateTodo(todo)
		appendHTML(todoWraper, t)
	}
}
// 加载todo 显示在页面上
var showTodoList = function() {
	var todoList = loadTodos()
	insertTodos(todoList)
}