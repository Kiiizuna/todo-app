// 创建todo 的事件
var bindEvents = function() {
	var button = e('#id-add-button')
	bindEvent(button, 'click', function(event) {
		var input = e('#id-input')
		var task = input.value
		log("task", task)
		var todo = createTodo(task)
		saveTodo(todo)
		// 点击 add
		// showTodoList()
	})

	// 切换页面的按钮
	bindAll('.hua-tab', 'click', function(event){
		var btn = event.target
		log('btn', btn)
		var page = btn.dataset.page
		// log('page', typeof(page))
		showPage(page)
		pushState(page)
		// if (page == 'todo-new') {
		// 	pageShowNew()
		// } else if (page = 'todo-wrapper') {
		// 	pageShowWrapper()
		// }
	})

	// 点击前进后退切换页面
	window.addEventListener('popstate', function(event){
		var state = event.state
		var className = state.page
		log('popstate', state, className)
		showPage(className)
	})
}