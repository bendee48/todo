import Project from './project.js';

const projectPage = (()=> {
  const container = document.querySelector('.main-container');
  let projects = Project.all;

  // Create div to hold Project
  const projectContainer = (title)=> {
    let div = document.createElement('div');
    div.classList.add('project');
    div.innerText = title;
    return div;
  }

  // Append all projects to .main-container
  const displayProjects = ()=> {
    projects.forEach((project)=> {
      container.appendChild(projectContainer(project.title));
    })
  }

  return { displayProjects }
})();

export default projectPage