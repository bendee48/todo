import modal from './modal.js';
import projectContent from './projectContent.js';

const projectPage = (()=> {
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

  // Create div to hold a Project
  const projectContainer = (title, index)=> {
    let div = document.createElement('div');
    div.classList.add('project');
    div.innerText = title;
    div.setAttribute('data-index', index);
    _addListener(div);
    return div;
  }

  // Append all projects to .main-container
  const displayProjects = (projects)=> {
    projectsContainer.innerHTML = "";
    projects.forEach((project, index)=> {
      projectsContainer.appendChild(projectContainer(project.title, index));
    })
  }

  return { displayProjects }
})();

export default projectPage