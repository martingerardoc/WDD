/* We declare three variables that hold references to the input, button and list elements */

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_____');// you need to fill in the blank to reference the HTML element that is a unordered list element.

/* Create a li element that will hold each entry's chapter title and an asociated delete button*/
const li = document.createElement('li');

/*create a delete button */

const deleteButton = document.createElement('button');

/* Populate the li element variable's textContent or innerHTML with the input value*/

li.textContent = input.ariaValueMax;
/*Populate the button textContent with a ❌ */

deleteButton.textContent = '❌';

/* Append the li element variable with the delete button */
li.append(deleteButton);

/* Append the li element variable to the unordered list in your HTML.*/
