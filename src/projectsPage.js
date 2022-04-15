import modal from './modal.js';
import projectContent from './projectContent.js';

const projectsPage = (()=> {
  const container = document.querySelector('.main-container');
  const projectsContainer = createProjectsContainer();
  container.appendChild(projectsContainer);

  // Projects Container
  function createProjectsContainer() {
    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projects-container');
    return projectsContainer;
  }

  // Add Event Listener to Project Div
  const _addListener = (projectDiv)=> {
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
  const projectContainer = (title, index)=> {
    let div = document.createElement('div');
    div.classList.add('project');
    div.setAttribute('data-index', index);
    div.appendChild(_titleElement(title));
    _addListener(div);
    return div;
  }

  // Create New Project folder
  const newFolder = ()=> {
    let div = document.createElement('div');
    div.classList.add('project', 'new-project');
    div.appendChild(newFolderBtn());
    return div;
  }

  const newFolderBtn = ()=> {
    let btn = document.createElement('div');
    btn.classList.add('button_plus');
    return btn;
  }

  // Append all projects to projectsContainer
  const displayProjects = (projects)=> {
    projectsContainer.innerHTML = "";
    projectsContainer.appendChild(newFolder()); // Append new folder button first
    projects.forEach((project, index)=> {
      projectsContainer.appendChild(projectContainer(project.title, index));
    })
  }

  return { displayProjects }
})();

export default projectsPage