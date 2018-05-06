let addInput = document.querySelector('input.add-item');
const addButton = document.querySelector('button.add-item');
const removeButton = document.querySelector('button.remove-item');
const divList = document.querySelector('.list');
const listUL = divList.querySelector('ul');
const liList = document.getElementsByTagName('li');


addButton.addEventListener('click', () => {
  const text = addInput.value;
  const li = document.createElement('li');
  li.textContent = text;
  listUL.appendChild(li);
  addInput.value = '';
});

removeButton.addEventListener('click', () => {
  const lastLI = liList[liList.length - 1];
  listUL.removeChild(lastLI);
});


// divList.addEventListener('click', (ev) => { });
// works, but blows away the whole page when any button other than an li button
// is clicked
listUL.addEventListener('click', (ev) => {
  // event is an object w/ attributes and methods
  // use event.target to get element where event started
  if (ev.target.tagName == 'BUTTON'){
    if (ev.target.className == 'remove'){
      let currentLI = ev.target.parentNode;
      let ul = currentLI.parentNode;
      ul.removeChild(currentLI);
    } else if (ev.target.className == 'up'){
        let currentLI = ev.target.parentNode;
        let prevLI = currentLI.previousElementSibling;
        let ul = currentLI.parentNode;
        // check if there is a previous LI so don't add to end of list
        if (prevLI){
          ul.insertBefore(currentLI, prevLI);
        }
    } else if (ev.target.className == 'down'){
        let currentLI = ev.target.parentNode;
        let nextLI = currentLI.nextElementSibling;
        let ul = currentLI.parentNode;
        // check if there is a previous LI so don't add to end of list
        if (nextLI){
          ul.insertBefore(nextLI, currentLI);
        }
    }
  }
});
