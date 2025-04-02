
import { getFormattedTime } from '../render.js';
import{saveNotesToLocalStorage} from'./localStorage.js';

export function saveStickyNote(stickyNote) {
    const timestamp = getFormattedTime();
    const noteContent = stickyNote.querySelector('.main').innerHTML;

    const savedNote = document.createElement('div');
    savedNote.classList.add('saved-note');
    savedNote.innerHTML = `
        <div class='save-container'>
            <div class="saved-heading">
                <strong>Sticky Note</strong>
                <div class="timestamps">${timestamp}</div>  
                <div id='removeNote'>X</div>
            </div>
            <div class="saved-content" >${noteContent}</div>
        </div>
    `;
    document.querySelector('.save-data').appendChild(savedNote);
    saveNotesToLocalStorage();
    const remove = savedNote.querySelector('#removeNote');
    remove.addEventListener('click', function () {
        savedNote.remove();
        saveNotesToLocalStorage();
    });
}
export function addSaveButtonListener() {
    const saveBtns = document.querySelectorAll('.saveBtn');
    saveBtns.forEach(saveBtn => {
        saveBtn.addEventListener('click', function () {
            const stickyNote = saveBtn.closest('.sticky-note');
            saveStickyNote(stickyNote); 
            saveNotesToLocalStorage();
         
        });
    });
}

