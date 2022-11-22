// SELECTOR
const descPopup = document.getElementById('desc-popup');
const popupCloseBtn = document.getElementById('close-popup');
const descInfoEl = document.getElementById('desc-info');
const project = document.querySelectorAll('.project');
const visitButton = document.querySelectorAll('.visit-button');

//EVENTLISTENER

window.addEventListener('load', function () {
  if (window.innerWidth < 500) {
    for (let i = 0; i < project.length; i++) {
      project[i].addEventListener('click', () => {
        showProjectInfo(project[i]);
      });
      visitButton[i].classList.add('disabled');
    }
  } else {
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth < 500) {
    for (let i = 0; i < project.length; i++) {
      project[i].addEventListener('click', () => {
        showProjectInfo(project[i]);
      });
      visitButton[i].classList.add('disabled');
    }
  } else {
  }
});

popupCloseBtn.addEventListener('click', () => {
  descPopup.classList.add('hidden');
});

//FUNCTION
function showProjectInfo(project) {
  descInfoEl.innerHTML = '';
  let techs = [];
  for (i = 0; i < project.children[1].children[3].children.length; i++) {
    techs.push(project.children[1].children[3].children[i].innerText);
  }
  const descEl = document.createElement('div');
  descEl.classList.add('project-desc-popup');
  descEl.innerHTML = `
  <p class="project-desc-title-popup">${project.children[1].children[0].innerText}</p>
  <p class="project-desc-text-popup">${project.children[1].children[1].innerText}</p>
    <p class="project-desc-separator-popup">${project.children[1].children[2].innerText}</p>
    <p class="tags">${techs.map((tech) => `<span class="tag-popup"> ${tech}</span>`).join('')}</p>
    <p class="project-desc-separator-popup">${project.children[1].children[4].innerText}</p>
    <p class="project-desc-link-popup"><a class="visit-button-popup" href="${
      project.children[1].children[5].children[0].href
    }">${project.children[1].children[5].children[0].innerText}</a></p>
    `;

  descInfoEl.appendChild(descEl);

  descPopup.classList.remove('hidden');
}
