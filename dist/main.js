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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _projectPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectPage.js */ \"./src/projectPage.js\");\n/* harmony import */ var _projectModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectModal.js */ \"./src/projectModal.js\");\n\n\n\n\n\n// Creating a todo\nlet obj = {title: \"A title\", description: \"A description\", dueDate: 'tomoroow', priority: 'High'}\nlet todo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](obj)\n\n// Creating projects adding a todo to project\nlet project = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('A project title')\nlet project1 = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Another project title')\nproject.addTodo(todo)\n\n// Display projects\n_projectPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayProjects()\n\n// Add event listner to project button\nconst projectBtn = document.querySelector('.project-btn');\nprojectBtn.addEventListener('click', _projectModal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].run);\n\nconsole.log(_project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].all)\n\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _projectPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectPage.js */ \"./src/projectPage.js\");\n\n\n\nconst projectModal = (()=> {\n  const pageContainer = document.querySelector('.page-container');\n\n  const createPageModal = ()=> {\n    const pageModal = document.createElement('div');\n    pageModal.classList.add('project-modal');\n    return pageModal;\n  }\n  \n  const createMainModal = ()=> {\n    const modalMain = document.createElement('div');\n    modalMain.classList.add('modal-main');\n    return modalMain;\n  }\n\n  const createTitleInput = ()=> {\n    const titleInput = document.createElement('input');\n    titleInput.type = \"text\";\n    titleInput.id = \"title\";\n    titleInput.name = \"title\";\n    titleInput.title = \"Project Title\";\n    titleInput.placeholder = \"Project Title\";\n    titleInput.required = true;\n    return titleInput;\n  }\n\n  const createSubmitInput = ()=> {\n    const submitInput = document.createElement('input');\n    submitInput.type = \"submit\";\n    submitInput.value = \"Create Project\";\n    return submitInput;\n  }\n\n  const createForm = ()=> {\n    const form = document.createElement('form');\n    form.classList.add('project-form');\n    const titleInput = createTitleInput();\n    form.appendChild(titleInput);\n    const submitInput = createSubmitInput();\n    form.appendChild(submitInput);\n    form.addEventListener('submit', createProject);\n    return form;\n  }\n\n  const createModal = ()=> {\n    const pageModal = createPageModal();\n    const mainModal = createMainModal();\n    const form = createForm();\n    pageModal.appendChild(mainModal);\n    mainModal.appendChild(form);\n    return pageModal;\n  }\n\n  const createProject = (e)=> {\n    e.preventDefault();\n    const formData = new FormData(e.target);\n    new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](formData.get('title'));\n    closeModal();\n    _projectPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayProjects();\n  }\n\n  const closeModal = ()=> {\n    const modal = document.querySelector('.project-modal');\n    console.log(modal)\n    modal.remove();\n  }\n  \n  const run = ()=> {\n    pageContainer.appendChild(createModal());\n  }\n\n  return { run }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectModal);\n\n//# sourceURL=webpack://todo/./src/projectModal.js?");

/***/ }),

/***/ "./src/projectPage.js":
/*!****************************!*\
  !*** ./src/projectPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\nconst projectPage = (()=> {\n  const container = document.querySelector('.main-container');\n  const projectsContainer = createProjectsContainer();\n  container.appendChild(projectsContainer);\n  let projects = _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].all;\n\n  function createProjectsContainer() {\n    const projectsContainer = document.createElement('div');\n    projectsContainer.classList.add('projects-container');\n    return projectsContainer;\n  }\n\n  // Create div to hold Project\n  const projectContainer = (title)=> {\n    let div = document.createElement('div');\n    div.classList.add('project');\n    div.innerText = title;\n    return div;\n  }\n\n  // Append all projects to .main-container\n  const displayProjects = ()=> {\n    projectsContainer.innerHTML = \"\";\n    projects.forEach((project)=> {\n      projectsContainer.appendChild(projectContainer(project.title));\n    })\n  }\n\n  return { displayProjects }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectPage);\n\n//# sourceURL=webpack://todo/./src/projectPage.js?");

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