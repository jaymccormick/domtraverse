let addInput = document.querySelector('input.add-item');
const addButton = document.querySelector('button.add-item');
const removeButton = document.querySelector('button.remove-item');
const divList = document.querySelector('.list');
const listUL = divList.querySelector('ul');
const liList = document.getElementsByTagName('li');
const lis = listUL.children;

// function to add buttons to li's present on load or added after
function attachLIButtons(li){
  let up = document.createElement('button');
  let down = document.createElement('button');
  let remove = document.createElement('button');
  up.className = 'up';
  up.textContent = 'up';
  down.className = 'down';
  down.textContent = 'down';
  remove.className = 'remove';
  remove.textContent = 'remove';
  li.appendChild(up);
  li.appendChild(down);
  li.appendChild(remove);
}

for (let i = 0; i < lis.length; i++){
  attachLIButtons(lis[i]);
}

addButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addInput.value;
  attachLIButtons(li);
  ul.appendChild(li);
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
