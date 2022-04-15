import modal from './modal.js';
import projectContent from './projectContent.js';
import newProjectForm from './newProjectForm.js';

const projectsPage = (()=> {
  const container = document.querySelector('.main-container');
  const projectsContainer = _createProjectsContainer();
  container.appendChild(projectsContainer);

  // Projects Container
  function _createProjectsContainer() {
    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projects-container');
    return projectsContainer;
  }

  // Add Event Listener to Project Div
  const _projectContentListener = (projectDiv)=> {
    projectDiv.addEventListener('click', function(e) {
      modal.run(projectContent.run(e));
    });
  }

  // Create element to hold Project title
  const _titleElement = (title)=> {
    const element = document.createElement('span');
    element.innerText = title;
    return element;
  }

  // Create div to hold a Project
  const _projectContainer = (title, index)=> {
    let div = document.createElement('div');
    div.classList.add('project');
    div.setAttribute('data-index', index);
    div.appendChild(_titleElement(title));
    _projectContentListener(div);
    return div;
  }

  // Create New Project folder
  const _newFolder = ()=> {
    let div = document.createElement('div');
    div.classList.add('project', 'new-project');
    div.appendChild(_newFolderBtn());
    _newProjectFormListener(div);
    return div;
  }

  // Button for the New Project Folder
  const _newFolderBtn = ()=> {
    let btn = document.createElement('div');
    btn.classList.add('button_plus');
    return btn;
  }

  // Listener for New Project Form
  const _newProjectFormListener = (element)=> {
    element.addEventListener('click', function() {
      modal.run(newProjectForm.run());
    })
  }

  // Append all projects to projectsContainer
  const displayProjects = (projects)=> {
    projectsContainer.innerHTML = "";
    projectsContainer.appendChild(_newFolder()); // Append new folder button first
    projects.forEach((project, index)=> {
      projectsContainer.appendChild(_projectContainer(project.title, index));
    })
  }

  return { displayProjects }
})();

export default projectsPage