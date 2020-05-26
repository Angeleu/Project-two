/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
/** Creating global variables */

/** Creating a variable studentsList to select all students elements */
const studentsList = document.querySelector('.student-list');
console.log(studentsList);

/** Creating a variable studentItems to store the selected list of items and their values */
const studentItems = studentsList.children;
const studentsPerPage = 10;
const page = document.querySelector('.page');
/*** 
   Creating the `showPage`function to hide the rest of the items in the list of students and show the 10 per page we want to show
***/
const showPage = (studentItems, page) => {

   let startIndex = (page * 10) - 10;
   let endIndex = page * 10;

/** Loop over the list of students to display the 10 per page and hide the rest */
   for (let i = 0; i < studentItems.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentItems[i].style.display = '';
      } else {
         studentItems[i].style.display = 'none'     
       }
   }
};
/** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (studentItems) => {
/** Rounding up to the highest integer to get the total number of pages we need for our list of 54 students with 10 students per page
  */
   let pageNumber = Math.ceil(studentItems.length/studentsPerPage);

/** Creating a div element with a class named `pagination` that contains an unordered list of pagination links*/
   const div = document.createElement('div');
   div.className = 'pagination';
   page.appendChild(div);
   const ul = document.createElement('ul');
   div.appendChild(ul);
      for (let i = 1; i<= pageNumber; i++) {
         const li = document.createElement('li');
         const a = document.createElement('a');
         a.textContent = i;

      /** Give an active class to the first pagination link */
         if(i === 1) {a.className = "active"}
         ul.appendChild(li);
         li.appendChild(a);
      /** add an event listener that responds to clicked pagination links */
      a.addEventListener('click', (e) => {
   
      /** Loop over pagination links to make only the clicked link active and display the corresponding page */
         let paginationLinks = document.querySelectorAll('.pagination ul li a');
         for(i=0; i < paginationLinks.length; i++) {
            paginationLinks[i].className = '';
         }
         if (e.target.tagName === "A") {
            e.target.className = 'active'
         showPage(studentItems,a.textContent);
         }
      });
      /** Highlight the link that is pointed over with the cursor for better presentation*/
      a.addEventListener('mouseover', (e) => {
         e.target.style.cursor = 'pointer';
      });
      }; 

};
   /*** Calling the `showPage` function to print the first page */

showPage(studentItems,1); 

appendPageLinks(studentItems);



