function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  if (localStorage['data'] !== null && localStorage['data'] !== undefined) {
    toDos = JSON.parse(localStorage['data']);
    renderTheUI();
  }

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');

    if (!newToDoText.value) {return;}

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id.value
    });
    localStorage['data'] = JSON.stringify(toDos);
    id+=1;
    newToDoText.value= '';

    renderTheUI();

  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      deleteButton.className = 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored';
      deleteButton.type = 'button';
      deleteButton.value = 'Delete Item';

      toDoList.appendChild(newLi);
      newLi.prepend(checkbox);
      newLi.appendChild(deleteButton);

      deleteButton.addEventListener('click', () => {
        toDos = toDos.filter((todo) => {
          return todo != toDo;
        });
        localStorage['data'] = JSON.stringify(toDos);

        renderTheUI();
      });


    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

 renderTheUI();

}

window.onload = function(){
  onReady();
};
