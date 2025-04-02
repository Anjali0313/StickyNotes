export function makeDraggable(note) {
    note.style.position = 'absolute'; 
    note.addEventListener('mousedown', function (e) {
        if (e.target.closest('.main')) return; 

        let offsetX = e.clientX - note.getBoundingClientRect().left;
        let offsetY = e.clientY - note.getBoundingClientRect().top;

        function onMouseMove(event) {
            let newLeft = event.clientX - offsetX;
            let newTop = event.clientY - offsetY;

            newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - note.offsetWidth));
            newTop = Math.max(0, Math.min(newTop, window.innerHeight - note.offsetHeight));

            note.style.left = `${newLeft}px`;
            note.style.top = `${newTop}px`;
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
}

