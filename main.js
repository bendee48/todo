/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/eventObserver.js":
/*!******************************!*\
  !*** ./src/eventObserver.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst eventObserver = (()=> {\n  const subscriptions = {};\n\n  const subscribe = ({subName, funcToCall})=> {\n    if (subscriptions[subName]) {\n      subscriptions[subName].add(funcToCall);\n    } else {\n      subscriptions[subName] = new Set([funcToCall]);\n    }\n  }\n\n  const run = (subName, ...args)=> {\n    subscriptions[subName].forEach(func => {\n      func.call(null, ...args);\n    });\n  }\n\n  return { subscribe, run }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventObserver);\n\n//# sourceURL=webpack://todo/./src/eventObserver.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _projectPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectPage.js */ \"./src/projectPage.js\");\n/* harmony import */ var _eventObserver_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventObserver.js */ \"./src/eventObserver.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n/* harmony import */ var _newProjectForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newProjectForm.js */ \"./src/newProjectForm.js\");\n\n\n\n\n\n\n\n// Testing Creating a todo\nlet obj = {title: \"A title\", description: \"A description\", dueDate: 'tomoroow', priority: 'High'}\nlet obj1 = {title: \"A new todo\", description: \"Do some things\", dueDate: 'Next year', priority: 'Low'}\nlet todo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](obj)\nlet todo1 = new _todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](obj1)\n\n// Testing Creating projects adding a todo to project\nlet project = _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create('A project title')\nlet project1 = _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create('Another project title')\nproject.addTodo(todo)\nproject.addTodo(todo1)\n\n// Display projects\nlet projects = _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].all;\n_projectPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayProjects(projects);\n\n// Add event listener to new project button\nconst projectBtn = document.querySelector('.project-btn');\nprojectBtn.addEventListener('click', function() {\n  _modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].run(_newProjectForm_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].run());\n})\n\n// Testing EventObserver\n// function hello(name) { console.log(`Hello ${name}`)};\n// eventObserver.subscribe({subName: 'Updating the DOM', funcToCall: hello});\n// eventObserver.run('Updating the DOM', 'Emma');\n\n// Event Observers\n// Update Project display on creation of a new Project\n_eventObserver_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].subscribe({subName: \"New Project\", funcToCall: _projectPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayProjects});\n// Create and Save a Project\n_eventObserver_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].subscribe({subName: \"Create Project\", funcToCall: _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create});\n// Close Modal\n_eventObserver_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].subscribe({subName: \"Close Modal\", funcToCall: _modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].closeModal})\n\nconsole.log(_project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].all)\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = (()=> {\n  const pageContainer = document.querySelector('.page-container');\n\n  const _createModalBackdrop = ()=> {\n    const modalBackdrop = document.createElement('div');\n    modalBackdrop.classList.add('modal-backdrop');\n    return modalBackdrop;\n  }\n  \n  const _createMainModal = ()=> {\n    const modalMain = document.createElement('div');\n    modalMain.setAttribute(\"role\", \"dialog\");\n    modalMain.tabIndex = -1;\n    modalMain.classList.add('modal-main');\n    return modalMain;\n  }\n\n  const _createCloseBtn = ()=> {\n    const btn = document.createElement('button');\n    btn.innerText = 'Close';\n    btn.classList.add('close-btn');\n    btn.addEventListener('click', closeModal);\n    return btn;\n  }\n\n  const _createModal = (content)=> {\n    const modalBackdrop = _createModalBackdrop();\n    const mainModal = _createMainModal();\n    const closeBtn = _createCloseBtn();\n    modalBackdrop.appendChild(mainModal);\n    mainModal.appendChild(closeBtn);\n    mainModal.appendChild(content);\n    return modalBackdrop;\n  }\n\n  const closeModal = ()=> {\n    const modal = document.querySelector('.modal-backdrop');\n    modal.remove();\n  }\n\n  const focusCloseBtn = ()=> {\n    const closeBtn = document.querySelector('.close-btn');\n    closeBtn.focus();\n  }\n  \n  const run = (content)=> {\n    let modal = _createModal(content);\n    pageContainer.appendChild(modal);\n    focusCloseBtn(); // Pull focus onto modal (close button) when opened, away from trigger\n  }\n\n  return { run, closeModal }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://todo/./src/modal.js?");

/***/ }),

/***/ "./src/newProjectForm.js":
/*!*******************************!*\
  !*** ./src/newProjectForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _eventObserver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventObserver.js */ \"./src/eventObserver.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n\nconst newProjectForm = (()=> {\n  const container = document.createElement('div');\n  container.classList.add('new-project-content');\n  const projectObj = _project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n  const _createTitleInput = ()=> {\n    const titleInput = document.createElement('input');\n    titleInput.type = \"text\";\n    titleInput.id = \"title\";\n    titleInput.name = \"title\";\n    titleInput.title = \"Project Title\";\n    titleInput.placeholder = \"Project Title\";\n    titleInput.required = true;\n    return titleInput;\n  }\n\n  const _createSubmitInput = ()=> {\n    const submitInput = document.createElement('input');\n    submitInput.type = \"submit\";\n    submitInput.value = \"Create Project\";\n    return submitInput;\n  }\n\n  const _createForm = ()=> {\n    const form = document.createElement('form');\n    form.classList.add('project-form');\n    const titleInput = _createTitleInput();\n    form.appendChild(titleInput);\n    const submitInput = _createSubmitInput();\n    form.appendChild(submitInput);\n    form.addEventListener('submit', _createProject);\n    return form;\n  }\n\n  const _createProject = (e)=> {\n    e.preventDefault();\n    const formData = new FormData(e.target);\n    let title = formData.get('title');\n    _eventObserver_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].run(\"Create Project\", title); // Runs the Project.create function\n    _eventObserver_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].run(\"Close Modal\"); // Closes an open modal\n    _eventObserver_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].run(\"New Project\", projectObj.all); // Run Project Page update\n  } \n\n  const _clearContent = ()=> {\n    // Clears previous content from the container before each call\n    container.innerHTML = \"\";\n  }\n\n  const _content = ()=> {\n    _clearContent();\n    container.appendChild(_createForm());\n    return container;\n  }\n\n  const run = ()=> {\n    return _content();\n  }\n\n  return { run }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProjectForm);\n\n\n//# sourceURL=webpack://todo/./src/newProjectForm.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Project(title) {\n  this._title = title;\n  this._todos = [];\n  // Save all created Project instances into Project.all \n  // Project.all.push(this);\n}\n\n// Static method containing all created Projects\nProject.all = [];\n\n// Static method to create and save a Project\nProject.create = function(title) {\n  let project = new Project(title);\n  project.save();\n  return project;\n}\n\n// Getters and setters for Project attributes\nObject.defineProperties(Project.prototype, {\n  title: {\n    get: function() {\n      return this._title;\n    },\n    set: function(title) {\n      this._title = title;\n    }\n  },\n  todos: {\n    get: function() {\n      return this._todos;\n    }\n  }\n});\n\n// Add a todo to a Project\nProject.prototype.addTodo = function(todo) {\n  this._todos.push(todo);\n}\n\n// Save Project Object\nProject.prototype.save = function() {\n  Project.all.push(this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo/./src/project.js?");

/***/ }),

/***/ "./src/projectContent.js":
/*!*******************************!*\
  !*** ./src/projectContent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\nconst projectContent = (()=> {\n  const container = document.createElement('div');\n  let project;\n\n  const projectTitle = (title)=> {\n    const h1 = document.createElement('h1');\n    h1.innerText = title;\n    return h1;\n  }\n  \n  const todoContainer = ()=> {\n    const todoContainer = document.createElement('div');\n    return todoContainer;\n  }\n  \n  const addTodos = ()=> {\n    let container = todoContainer();\n    project.todos.forEach(todo => {\n      let todoBox = document.createElement('div');\n      todoBox.classList.add('todo');\n      todoBox.innerText = todo.title;\n      container.appendChild(todoBox);\n    });\n    return container;\n  }\n\n  const _clearContent = ()=> {\n    container.innerHTML = \"\";\n  }\n\n  const run = (e)=> {\n    _clearContent();\n    project = _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].all[e.target.dataset.index];\n    container.appendChild(projectTitle(project.title));\n    container.appendChild(addTodos());\n    return container;\n  }\n\n  return { run }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectContent);\n\n//# sourceURL=webpack://todo/./src/projectContent.js?");

/***/ }),

/***/ "./src/projectPage.js":
/*!****************************!*\
  !*** ./src/projectPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n/* harmony import */ var _projectContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectContent.js */ \"./src/projectContent.js\");\n\n\n\nconst projectPage = (()=> {\n  const container = document.querySelector('.main-container');\n  const projectsContainer = createProjectsContainer();\n  container.appendChild(projectsContainer);\n\n  // Projects Container\n  function createProjectsContainer() {\n    const projectsContainer = document.createElement('div');\n    projectsContainer.classList.add('projects-container');\n    return projectsContainer;\n  }\n\n  // Add Event Listener to Project Div\n  const _addListener = (projectDiv)=> {\n    projectDiv.addEventListener('click', function(e) {\n      _modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].run(_projectContent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].run(e));\n    });\n  }\n\n  // Create div to hold a Project\n  const projectContainer = (title, index)=> {\n    let div = document.createElement('div');\n    div.classList.add('project');\n    div.innerText = title;\n    div.setAttribute('data-index', index);\n    _addListener(div);\n    return div;\n  }\n\n  // Append all projects to .main-container\n  const displayProjects = (projects)=> {\n    projectsContainer.innerHTML = \"\";\n    projects.forEach((project, index)=> {\n      projectsContainer.appendChild(projectContainer(project.title, index));\n    })\n  }\n\n  return { displayProjects }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectPage);\n\n//# sourceURL=webpack://todo/./src/projectPage.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Todo({title, description, dueDate, priority}) {\n  this._title = title;\n  this._description = description;\n  this._dueDate = dueDate;\n  this._priority = priority;\n}\n\nObject.defineProperties(Todo.prototype, {\n  title: {\n    get: function() {\n      return this._title;\n    },\n    set: function(title) {\n      this._title = title;\n    }\n  },\n  description: {\n    get: function() {\n      return this._description;\n    },\n    set: function(desc) {\n      this._description = desc;\n    }\n  },\n  dueDate: {\n    get: function() {\n      return this._dueDate;\n    },\n    set: function(dueDate) {\n      this._dueDate = dueDate;\n    }\n  },\n  priority: {\n    get: function() {\n      return this._priority;\n    },\n    set: function(priority) {\n      this._priority = priority;\n    }\n  }\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;