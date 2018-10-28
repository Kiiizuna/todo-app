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
var templateTodoEdit = function(todo, done) {
	var status = ''
	if (done) {
		status = 'done'
	}
	var task = todo.task
	var t = `
		<div class='todo-cell ${status}'>
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
		var t = templateTodoEdit(todo, false)
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

var changeAndSaveAllTodos = function() {
	// 给 todo-edit 加上事件委托
	var todoContainer = e('.todo-edit')
	todoContainer.addEventListener('click', function(event){
		var target = event.target
		log('todo-content click', event, event.target)
		if (target.classList.contains('todo-done')) {
			log('完成')
			toggleClass('todo-done', target.parentElement)
			saveEditTodos()
		} else if (target.classList.contains('todo-delete')) {
			log('删除')
			target.parentElement.remove()
			saveEditTodos()
		}
	})
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

changeAndSaveAllTodos()