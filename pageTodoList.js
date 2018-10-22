// 显示todo
var templateTodo = function(todo) {
	var task = todo.task
	var t = `
		<div>
			${task}
		</div>
	`
	return t 
}

// 显示修改todo 页面
var templateTodoEdit = function(todo) {
	var task = todo.task
	var t = `
		<div class='todo-cell'>
            <button class='todo-done'>完成</button>
            <button class='todo-delete'>删除</button>
            <span class='todo-content' contenteditable='true'>${task}</span>
        </div>
	`
	return t 
}
// 显示todo 详情
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

var insertTodosEdit = function(todoList) {
	var todoEdit = e('.todo-edit')
	todoEdit.innerHTML = '' 	
	for (var i = 0; i < todoList.length; i++) {
		var todo = todoList[i]
		var t = templateTodoEdit(todo)
		appendHTML(todoEdit, t)
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

// 加载 todoEdit 在页面上
var showTodoListEdit = function() {
	var todoList = loadTodos()
	insertTodosEdit(todoList)
}

var showTodoListDetail = function() {
	var todoList = loadTodos()
	insertTodosDetail(todoList)
}
