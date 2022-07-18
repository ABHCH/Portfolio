const projectContainer = document.querySelector(".my-projects");

projectdata.forEach((project) => {
  const html = `<div class="project1">

    <div class="project-icons">
     <a href=""><i class="fa-solid fa-folder"></i></a>
     <div class="share-projects-option">
       <a href="" class="my-git"><i class="fa-brands fa-github"></i></a>
       <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
     </div>
    </div>

    <div class="projects-details">
      <div class="project-name">${project.projectName}r</div>
      <div class="project-details">${project.aboutProject}</div>
    </div>

    <div class="project-tech-stack">
      <div class="html">${project.webLang}</div>
      <div class="react">${project.FrameWork}</div>
      <div class="js">${project.ProgrammingLang}</div>
    </div>

  </div>`;

  projectContainer.insertAdjacentHTML('beforeend', html);

});
