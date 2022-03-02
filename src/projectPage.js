import projectModal from './projectModal.js';

const projectPage = (()=> {
  const modal = projectModal;
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
    projectDiv.addEventListener('click', modal.run); //TODO
  }

  // Create div to hold a Project
  const projectContainer = (title)=> {
    let div = document.createElement('div');
    div.classList.add('project');
    div.innerText = title;
    _addListener(div);
    return div;
  }

  // Append all projects to .main-container
  const displayProjects = (projects)=> {
    projectsContainer.innerHTML = "";
    projects.forEach((project)=> {
      projectsContainer.appendChild(projectContainer(project.title));
    })
  }

  return { displayProjects }
})();

export default projectPage