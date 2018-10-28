// 创建todo 的事件
var bindEvents = function() {
	// 点击添加事件
	var button = e('#id-add-button')
	bindEvent(button, 'click', function(event) {
		var input = e('#id-input')
		var task = input.value
		log("task", task)
		var todo = createTodo(task)
		saveTodo(todo)
	})
	// 点击修改事件	
	var todoContainer = e('.todo-edit')
	todoContainer.addEventListener('keydown',function(event) {
		log('keydown', event)
		var target = event.target
		if (event.key === 'Enter') {
			target.blur()
			// event.preventDefault()
			saveEditTodos()
		}
	})
	// 点击其他地方失去焦点依旧保存修改的内容
	todoContainer.addEventListener('focusout', function(event) {
		log('focusout')
		saveEditTodos()
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