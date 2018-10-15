


// var bindAll = function(selector, eventName, callback) {
var pushState = function(className) {
	// 在showPage 的同时切换地址信息
	// 创建历史记录
	// className is todo-new todo-wrapper 
	var pageName = className.split('-')[1]
	var url = 'spa%20todo%20app.html?page=' + pageName
	var state = {
		page: className,
	}
	history.pushState(state, 'title', url)
	document.title = pageName
}

var showPage = function(className) {
	var pages = es('.div-page')
	for (var i = 0; i < pages.length; i++) {
		var page = pages[i]
		page.classList.add('hidden')
	}
	var selector = '.' + className
	var todoNewDiv = e(selector)
	todoNewDiv.classList.remove('hidden')
	// 如果是wrapper 页面需要加载每个list
	if (className == 'todo-wrapper') {
		showTodoList()
	}
	// 在showPage 的同时切换地址信息
	// className is todo-new todo-wrapper 
	// var pageName = className.split('-')[1]
	// var url = 'spa%20todo%20app.html?page=' + pageName
	// history.pushState(null, 'title', url)
	// document.title = pageName
}

// var pageShowWrapper = function() {
// 	var pages = es('.div-page')
// 	for (var i = 0; i < pages.length; i++) {
// 		pages[i].classList.add('hidden')
// 		var todoWrapperDiv = e('.todo-wrapper')
// 		todoWrapperDiv.classList.remove('hidden')
// 		showTodoList()
// 	}
// }


var initApp = function() {
	// 根据地址栏参数来显示不同的页面
	var query = location.search
	var [k, v] = query.slice(1).split('=')
	// 初始化为wrapper
	var page = 'wrapper'
	var validPages = ['new', 'wrapper']
	if (k == 'page') {
		if (validPages.includes(v)) {
			page = v
		}
	}
	var pageName = 'todo-' + page
	showPage(pageName)
	// pushState(pageName)
}

var __main = function() {
	bindEvents()
	// showTodoList()
	initApp()
}
__main()