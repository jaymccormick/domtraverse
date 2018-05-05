let addInput = document.querySelector('input.add-item');
const addButton = document.querySelector('button.add-item');
const removeButton = document.querySelector('button.remove-item');
const ul = document.querySelector('ul');
const liList = document.getElementsByTagName('li');
const divList = document.querySelector('.list');

addButton.addEventListener('click', () => {
  const text = addInput.value;
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
  addInput.value = '';
});

removeButton.addEventListener('click', () => {
  const lastLI = liList[liList.length - 1];
  ul.removeChild(lastLI);
});

divList.addEventListener('mouseover', (ev) => {
  // event is an object w/ attributes and methods
  // use event.target to get element where event started
  if (ev.target.tagName == 'LI'){
    let currentLI = ev.target;
    currentLI.textContent = currentLI.textContent.toUpperCase();
  }
});

divList.addEventListener('mouseout', (ev) => {
  // event is an object w/ attributes and methods
  // use event.target to get element where event started
  if (ev.target.tagName == 'LI'){
    let currentLI = ev.target;
    currentLI.textContent = currentLI.textContent.toLowerCase();
  }
});
