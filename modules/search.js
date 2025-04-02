export function searchNotes() {
    const searchQuery = document.querySelector('#searchInput').value.toLowerCase();
    const stickyNotes = document.querySelectorAll('.saved-note');

    stickyNotes.forEach(note => {
        const noteHeading = note.querySelector('h3').innerText.toLowerCase();
        if (noteHeading.includes(searchQuery)) {
            note.style.display = 'block';
        } else {
            note.style.display = 'none';
        }
    });
}

