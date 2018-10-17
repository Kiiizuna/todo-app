var templateTodo = function(todo) {
	var task = todo.task
	var t = `
		<div>
			${task}
		</div>
	`
	return t 
}

var templateTodoDetail = function(todo) {
	var task = todo.task
	var t = `
		<div>
		<button>点击显示详情</button>
		<span>${task}</span>	
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

var insertTodosDetail = function(todoList) {
	var todoDetail = e('.todo-detail')
	todoDetail.innerHTML = ''
	for (var i = 0; i < todoList.length; i++) {
		var todo = todoList[i]
		var t = templateTodoDetail(todo)
		appendHTML(todoDetail, t)
	}
}

// 加载最简单的 todo 文本在页面上
var showTodoList = function() {
	var todoList = loadTodos()
	insertTodos(todoList)
}

var showTodoListDetail = function() {
	var todoList = loadTodos()
	insertTodosDetail(todoList)
}
