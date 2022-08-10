const projectContainer = document.querySelector(".my-projects");
const menuBar = document.querySelector(".menu");
const list = document.querySelector(".list");
const cross = document.querySelector('.cross');

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

});

menuBar.addEventListener("click", () => {
  list.classList.add('active-class');
  menuBar.style.display  = 'none';
  cross.style.display = 'block';
})

cross.addEventListener("click", () => {
  list.classList.remove('active-class');
  menuBar.style.display  = 'block';
  cross.style.display = 'none';
})
