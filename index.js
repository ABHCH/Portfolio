const projectContainer = document.querySelector(".project-area");
const menuBar = document.querySelector(".menu");
const list = document.querySelector(".list");
const cross = document.querySelector('.cross');

projectdata.forEach((projectdata) => {
 const html = `
 <div class="project-cards">

 <div class="icons">
   <div class="folder-icon"><i class="fa-solid fa-folder"></i></div>
   <div class="links-icon">
   <div class="github-icon"><a href="${projectdata.githubLink}"><i class="fa-brands fa-github"></i></a></div>
   <div class="project-link"><a href="${projectdata.proLink}"><i class="fa-solid fa-up-right-from-square"></i></a></div>
   </div>
 </div>
 <div class="project-name">${projectdata.projectName}</div>
 <div class="project-description">${projectdata.aboutProject}</div>
 <div class="techstack">Tech Stack :- ${projectdata.webLang}  ${projectdata.ProgrammingLang}  ${projectdata.FrameWork}</div>
</div>
 `
 projectContainer.insertAdjacentHTML('afterbegin',html);

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
