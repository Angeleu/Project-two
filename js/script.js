/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
/** CREATING A VARIABLE studentsList TO SELECT ALL STUDENTS ELEMENTS */
const studentsList = document.querySelectorAll('.student-list');
console.log(studentsList);

/** CREATE A VARIABLE studentItems TO STORE THE SELECTED LIST OF ITEMS AND THEIR VALUE  */
const studentItems = studentsList.children;
const studentsPerPage = 10;
const page = document.querySelector('.page');
/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const showPage = (studentItems, page) => {

   let startIndex = (page * 10) - 10;
   let endIndex = page * 10;
   /** LOOP OVER STUDENT ITEMS TO DISPLAY THE RIGHT AMOUNT OF ITEMS PER PAGE(10 ITEMS) AND HIDE THE EXCES   */
   for (let i = 0; i < studentItems.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentItems[i].style.display = '';
      } else {
         studentItems[i].style.display = 'none'     
       }
   }
};
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (studentItems) => {
/** ROUNDING UP TO THE HIGHEST INTEGER TO GET THE TOTAL NUMBER OF PAGES WE NEED FOR OUR LIST OF 54 STUDENTS 
 WITH 10 ITEMS PER PAGE  */
   let pageNumber = Math.ceil(studentItems.length/studentsPerPage);

/** CREATING A DIV ELEMENT WITH A CLASS NAMED PAGINATION THAT CONTAINS AN UNORDERED LIST OF PAGINATION LINKS */
   const div = document.createElement('div');
   div.className = 'pagination';
   page.appendChild(div);
   const ul = document.createElement('ul');
   div.appendChild(ul);
      for (let i = 1; i<= pageNumber; i++) {
         const li = document.createElement('li');
         const a = document.createElement('a');
         a.textContent = i;

      /** GIVE AN ACTIVE CLASS TO THE FIRST PAGINATION LINK */
         if(i === 1) {a.className = "active"}
         ul.appendChild(li);
         li.appendChild(a);

      a.addEventListener('click', (e) => {
   
      /** LOOP OVER PAGINATION LINKS TO MAKE ONLY THE CLICKED PAGE ACTIVE AND DISPLAY THE SAID PAGE
      ***/
         let paginationLinks = document.querySelectorAll('.pagination ul li a');
         for(i=0; i < paginationLinks.length; i++) {
            paginationLinks[i].className = '';
         }
         if (e.target.tagName === "A") {
            e.target.className = 'active'
         showPage(studentItems,a.textContent);
         }
      });
      /** HIGHLIGHT THE LINK THAT IS POINTED OVER BY THE CURSOR */

      a.addEventListener('mouseover', (e) => {
         e.target.style.cursor = 'pointer';
      });
      }; 

};
showPage(studentItems,1); /*** CALLING showPage TO PRINT THE FIRST PAGE */
appendPageLinks(studentItems);



// Remember to delete the comments that came with this file, and replace them with your own code comments.