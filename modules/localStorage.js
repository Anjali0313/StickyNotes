import { getFormattedTime } from '../render.js';
export function saveNotesToLocalStorage() {
    const notes = [];
    document.querySelectorAll('.saved-note .saved-content').forEach(note => {
        notes.push(note.innerHTML);
    });
    localStorage.setItem('stickyNotes', JSON.stringify(notes));
}

export function loadStickyNotes() {
    const savedNotes = JSON.parse(localStorage.getItem('stickyNotes')) || [];
    savedNotes.forEach(noteContent => {
        const savedNote = document.createElement('div');
        savedNote.classList.add('saved-note');
        savedNote.innerHTML = `
            <div class='save-container'>
                <div class="saved-heading">
                    <strong>Sticky Note</strong>
                    <div class="timestamps">${getFormattedTime()}</div>  
                    <div class="removeNote">X</div>
                </div>
                <div class="saved-content" contenteditable="true">${noteContent}</div>
            </div>
        `;

        document.querySelector('.save-data').appendChild(savedNote);

        savedNote.querySelector('.removeNote').addEventListener('click', function () {
            savedNote.remove();
            saveNotesToLocalStorage();
        });
    });
}

window.addEventListener('DOMContentLoaded', loadStickyNotes);
