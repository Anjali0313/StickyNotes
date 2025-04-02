
import { addSaveButtonListener } from './modules/save.js';
import { searchNotes } from './modules/search.js';
import { makeDraggable } from './modules/drag.js'; 

export function renderStickyNote() {
  
    const container = document.querySelector('#notesContainer');
    const stickyNote = document.createElement('div');
    stickyNote.classList.add('sticky-note');
   
    const timestamp = getFormattedTime();
    stickyNote.innerHTML = `
        <div class="head">
          
            <div id="removeNoteBtn">x</div>
        </div>
        <div class="heading">
            <strong>Sticky Notes</strong>
            <div class="timestamp">
            ${timestamp}
        </div>
        </div>
        <div class="main" contenteditable="true">
            <h3></h3>
            <p></p>
        </div>
        <div class="foot">
        <div class="color" style="background-color: #d87093;"></div>
            <div class="color" style="background-color: #ebed5f;"></div>
            <div class="color" style="background-color: #97c8e7;"></div>
            <div class="color" style="background-color: #7b7b76;"></div>
            <div class="color" style="background-color: #91db91;"></div>
            <div><button class='saveBtn'>save</button></div>
        </div>`;
  
    container.appendChild(stickyNote);
    stickyNote.style.position = 'absolute';
    stickyNote.style.top = `${Math.random() * (window.innerHeight - 300)}px`;
    stickyNote.style.left = `${Math.random() * (window.innerWidth - 300)}px`;
     makeDraggable(stickyNote);

    const removeBtn = stickyNote.querySelector('#removeNoteBtn');
    removeBtn.addEventListener('click', function () {
      stickyNote.remove();
    });
  
  const colorButtons = stickyNote.querySelectorAll('.foot .color');
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            stickyNote.style.backgroundColor = button.style.backgroundColor;
        });
    });
   

      addSaveButtonListener(); 
  }
  
 export function getFormattedTime() {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      weekday: 'short',
    };
    const date = new Date();
    return date.toLocaleString('en-US', options);
  }
  document.addEventListener('DOMContentLoaded', () => {
    const addNoteBtn = document.getElementById('addNoteBtn');
    addNoteBtn.addEventListener('click', renderStickyNote);

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', searchNotes); 
     

});


