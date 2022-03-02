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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _projectPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectPage.js */ \"./src/projectPage.js\");\n/* harmony import */ var _newProjectModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newProjectModal.js */ \"./src/newProjectModal.js\");\n/* harmony import */ var _eventObserver_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventObserver.js */ \"./src/eventObserver.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n\n\n\n \n\n\n\n// Testing Creating a todo\nlet obj = {title: \"A title\", description: \"A description\", dueDate: 'tomoroow', priority: 'High'}\nlet todo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](obj)\n\n// Testing Creating projects adding a todo to project\nlet project = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('A project title')\nlet project1 = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Another project title')\nproject.addTodo(todo)\n\n// Display projects\nlet projects = _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].all;\n_projectPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayProjects(projects);\n\n// Add event listner to project button\nconst projectBtn = document.querySelector('.project-btn');\nprojectBtn.addEventListener('click', function() {\n  // newProjectModal.run(eventObserver);\n  _modal_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].run();\n})\n\n// Testing EventObserver\n// function hello(name) { console.log(`Hello ${name}`)};\n// eventObserver.subscribe({subName: 'Updating the DOM', funcToCall: hello});\n// eventObserver.run('Updating the DOM', 'Emma');\n\n// Event Observers\n// Update Project display on creation of a new Project\n_eventObserver_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].subscribe({subName: \"New Project\", funcToCall: _projectPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayProjects})\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = (()=> {\n  const pageContainer = document.querySelector('.page-container');\n\n  const _createModalBackdrop = ()=> {\n    const modalBackdrop = document.createElement('div');\n    modalBackdrop.classList.add('modal-backdrop');\n    return modalBackdrop;\n  }\n  \n  const _createMainModal = ()=> {\n    const modalMain = document.createElement('div');\n    modalMain.classList.add('modal-main');\n    return modalMain;\n  }\n\n  const _createCloseBtn = ()=> {\n    const btn = document.createElement('button');\n    btn.innerText = 'Close';\n    btn.classList.add('close-btn');\n    btn.addEventListener('click', _closeModal);\n    return btn;\n  }\n\n  const _createModal = ()=> {\n    const modalBackdrop = _createModalBackdrop();\n    const mainModal = _createMainModal();\n    const closeBtn = _createCloseBtn();\n    modalBackdrop.appendChild(mainModal);\n    mainModal.appendChild(closeBtn);\n    return modalBackdrop;\n  }\n\n  const _closeModal = ()=> {\n    const modal = document.querySelector('.modal-backdrop');\n    modal.remove();\n  }\n  \n  const run = ()=> {\n    pageContainer.appendChild(_createModal());\n  }\n\n  return { run }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://todo/./src/modal.js?");

/***/ }),

/***/ "./src/newProjectModal.js":
/*!********************************!*\
  !*** ./src/newProjectModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\nconst newProjectModal = (()=> {\n  const pageContainer = document.querySelector('.page-container');\n  let projectObj = _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  let eventObserver;\n\n  const _createPageModal = ()=> {\n    const pageModal = document.createElement('div');\n    pageModal.classList.add('project-modal');\n    return pageModal;\n  }\n  \n  const _createMainModal = ()=> {\n    const modalMain = document.createElement('div');\n    modalMain.classList.add('modal-main');\n    return modalMain;\n  }\n\n  const _createTitleInput = ()=> {\n    const titleInput = document.createElement('input');\n    titleInput.type = \"text\";\n    titleInput.id = \"title\";\n    titleInput.name = \"title\";\n    titleInput.title = \"Project Title\";\n    titleInput.placeholder = \"Project Title\";\n    titleInput.required = true;\n    return titleInput;\n  }\n\n  const _createSubmitInput = ()=> {\n    const submitInput = document.createElement('input');\n    submitInput.type = \"submit\";\n    submitInput.value = \"Create Project\";\n    return submitInput;\n  }\n\n  const _createCloseBtn = ()=> {\n    const btn = document.createElement('button');\n    btn.innerText = 'Close';\n    btn.classList.add('close-btn');\n    btn.addEventListener('click', function() {\n      _closeModal(true);\n    });\n    return btn;\n  }\n\n  const _createForm = ()=> {\n    const form = document.createElement('form');\n    form.classList.add('project-form');\n    const titleInput = _createTitleInput();\n    form.appendChild(titleInput);\n    const submitInput = _createSubmitInput();\n    form.appendChild(submitInput);\n    form.addEventListener('submit', _createProject);\n    return form;\n  }\n\n  const _createModal = ()=> {\n    const pageModal = _createPageModal();\n    const mainModal = _createMainModal();\n    const closeBtn = _createCloseBtn();\n    const form = _createForm();\n    pageModal.appendChild(mainModal);\n    mainModal.appendChild(closeBtn);\n    mainModal.appendChild(form);\n    return pageModal;\n  }\n\n  const _createProject = (e)=> {\n    e.preventDefault();\n    const formData = new FormData(e.target);\n    let newProject = new projectObj();\n    newProject.title = formData.get('title');\n    _closeModal();\n    eventObserver.run(\"New Project\", projectObj.all); // Run Project Page update\n  }\n\n  const _closeModal = ()=> {\n    const modal = document.querySelector('.project-modal');\n    modal.remove(); // Removes modal from DOM\n  }\n\n  const _focusTitleInput = ()=> {\n    const input = document.getElementById('title');\n    input.focus()\n  }\n  \n  const run = (eventObj)=> {\n    eventObserver = eventObj;\n    pageContainer.appendChild(_createModal());\n    _focusTitleInput(); //Focus input after modal load to stop return triggering a new modal\n  }\n\n  return { run }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProjectModal);\n\n//# sourceURL=webpack://todo/./src/newProjectModal.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Project(title) {\n  this._title = title;\n  this._todos = [];\n  // Save all created Project instances into Project.all \n  Project.all.push(this);\n}\n\n// Static method containing all created Projects\nProject.all = [];\n\n// Getters and setters for Project attributes\nObject.defineProperties(Project.prototype, {\n  title: {\n    get: function() {\n      return this._title;\n    },\n    set: function(title) {\n      this._title = title;\n    }\n  },\n  todos: {\n    get: function() {\n      return this._todos;\n    }\n  }\n});\n\n// Add a todo to a Project\nProject.prototype.addTodo = function(todo) {\n  this._todos.push(todo);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo/./src/project.js?");

/***/ }),

/***/ "./src/projectModal.js":
/*!*****************************!*\
  !*** ./src/projectModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectModal = (()=> {\n  const pageContainer = document.querySelector('.page-container');\n\n  const _createPageModal = ()=> {\n    const pageModal = document.createElement('div');\n    pageModal.classList.add('project-modal');\n    return pageModal;\n  }\n  \n  const _createMainModal = ()=> {\n    const modalMain = document.createElement('div');\n    modalMain.classList.add('modal-main');\n    return modalMain;\n  }\n\n  const _createCloseBtn = ()=> {\n    const btn = document.createElement('button');\n    btn.innerText = 'Close';\n    btn.classList.add('close-btn');\n    btn.addEventListener('click', function() {\n      _closeModal();\n    });\n    return btn;\n  }\n\n  const _createModal = ()=> {\n    const pageModal = _createPageModal();\n    const mainModal = _createMainModal();\n    const closeBtn = _createCloseBtn();\n    pageModal.appendChild(mainModal);\n    mainModal.appendChild(closeBtn);\n    return pageModal;\n  }\n\n  const _closeModal = ()=> {\n    const modal = document.querySelector('.project-modal');\n    modal.remove();\n  }\n  \n  const run = ()=> {\n    pageContainer.appendChild(_createModal());\n  }\n\n  return { run }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectModal);\n\n//# sourceURL=webpack://todo/./src/projectModal.js?");

/***/ }),

/***/ "./src/projectPage.js":
/*!****************************!*\
  !*** ./src/projectPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectModal.js */ \"./src/projectModal.js\");\n\n\nconst projectPage = (()=> {\n  const modal = _projectModal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const container = document.querySelector('.main-container');\n  const projectsContainer = createProjectsContainer();\n  container.appendChild(projectsContainer);\n\n  // Projects Container\n  function createProjectsContainer() {\n    const projectsContainer = document.createElement('div');\n    projectsContainer.classList.add('projects-container');\n    return projectsContainer;\n  }\n\n  // Add Event Listener to Project Div\n  const _addListener = (projectDiv)=> {\n    projectDiv.addEventListener('click', modal.run); //TODO\n  }\n\n  // Create div to hold a Project\n  const projectContainer = (title)=> {\n    let div = document.createElement('div');\n    div.classList.add('project');\n    div.innerText = title;\n    _addListener(div);\n    return div;\n  }\n\n  // Append all projects to .main-container\n  const displayProjects = (projects)=> {\n    projectsContainer.innerHTML = \"\";\n    projects.forEach((project)=> {\n      projectsContainer.appendChild(projectContainer(project.title));\n    })\n  }\n\n  return { displayProjects }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectPage);\n\n//# sourceURL=webpack://todo/./src/projectPage.js?");

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