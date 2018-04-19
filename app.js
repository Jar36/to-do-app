function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    let title = newToDoText.value;
    let newLi = document.createElement('li');
    newLi.classList.add('mdl-list__item');

    let checkbox = document.createElement('input');
    
    checkbox.type = 'checkbox';

    let button = document.createElement('input');
    button.className = 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored';
    componentHandler.upgradeElement(button);
    button.type = 'button';
    button.value ='Delete Item';


    newLi.textContent = title;
    newLi.prepend(checkbox);
    newLi.appendChild(button);
    toDoList.appendChild(newLi);

    newToDoText.value = '';

    button.addEventListener('click', () => {
      newLi.remove(this);
    });


  });




};

window.onload = function(){
  onReady();
};
