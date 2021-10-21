document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskSubmit = document.getElementById("create-task-form");
  taskSubmit.addEventListener("submit", submitCallback);
});

function submitCallback(e) {
  e.preventDefault();
  
  const taskSubmit = document.getElementById("create-task-form");
  const todosList = document.getElementById("tasks");
  const inputField = document.getElementById("new-task-description");
  
  let inputValue = inputField.value;
  console.log(inputValue);

  const listElement = document.createElement("li");
  listElement.innerText = inputValue;
  
  const deleteButton = document.createElement("button");
  deleteButton.innerText = " x ";
  deleteButton.addEventListener("click", handleDelete);
  listElement.append(deleteButton);

  let prioritySelector = document.createElement("select");
  let priorityOptions = ['why bother?', 'some day... I guess', 'low', 'medium', 'high', 'very high', 'pressing', 'urgent', 'all-consuming', 'matter of life and death'];
  for (const pOption of priorityOptions) {
    let selectItem = document.createElement('option');
    selectItem.innerText = pOption;
    prioritySelector.appendChild(selectItem);
  }

  prioritySelector.addEventListener('change', changePriority);

  listElement.append(prioritySelector);
  todosList.append(listElement);
  taskSubmit.reset();

}

function handleDelete(event) {
  event.target.parentNode.remove();
}

function changePriority(e) {
  const changeValue = e.target.value;
  const liTarget = e.target.parentElement;
  liTarget.style.color = '#00f';
  switch (changeValue) {
    case 'why bother?':
      liTarget.style.color = '#60f';
      break;
    case 'some day... I guess':
      liTarget.style.color = '#00f';
      break;
    case 'low':
      liTarget.style.color = '#0f0';
      break;
    case 'medium':
      liTarget.style.color = '#cc0';
      break;
    case 'high':
      liTarget.style.color = '#f80';
      break;
    case 'very high':
      liTarget.style.color = '#ff5c33';
      break;
    case 'pressing':
      liTarget.style.color = '#800000';
      break;
    case 'urgent':
      liTarget.style.color = '#e699cc';
      break;
    case 'all-consuming':
      liTarget.style.color = '#c0c';
      break;
    case 'matter of life and death':
      liTarget.style.color = '#f0f';
      break;
  }
  const todoListArray = [document.getElementById("tasks").children];
  console.log(todoListArray);


}



//form-id = "create-task-form"
//field-id = "new-task-description"
//submit button has no ID, no class