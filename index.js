//create three variables that reference the <ul> <input> <button> elements
const list = document.querySelector('ul'); 
const input = document.querySelector('input');
const addBtn = document.querySelector('button');
//create a function that will run in response to the button being clicked.
addBtn.onclick = function () {
 //store the current value of the input element as a variable 
 //set input elements value to an empty string — ''
     let currentValue = input.value;
        input.defaultValue;
 //create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');
 //append <span> and <button> as <li> children
    listItem.appendChild(span);
    listItem.appendChild(deleteBtn);
 //set the text content of the span to the input element 
     span.textContent = input.value;
 //set the text content of the button to 'Delete'
    deleteBtn.textContent = 'Delete';
 //append the list item as a child of the list.
    list.appendChild(listItem);
 //attach an event handler to the delete button that will delete entire list item
    deleteBtn.addEventListener('click', function(){
            list.removeChild(listItem);
    });
 //use the focus() method to focus the input element ready 
 //for entering the next shopping list item
    focusMethod = function getFocus(){
            input.focus();
            onfocus="input.value'";            }
}